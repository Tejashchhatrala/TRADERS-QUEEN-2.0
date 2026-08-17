const GEMINI_MODEL = 'gemini-1.5-flash';
const DEFAULT_SETTINGS = {
  googleAiKey: '',
  tones: ['Insightful', 'Supportive', 'Curious'],
  defaultTone: 'Insightful',
  commentLength: 'medium'
};

chrome.runtime.onInstalled.addListener(async () => {
  const current = await chrome.storage.sync.get(DEFAULT_SETTINGS);
  await chrome.storage.sync.set({ ...DEFAULT_SETTINGS, ...current });
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GOOGLE_SIGN_IN') {
    signIn().then(sendResponse).catch(error => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (message.type === 'GOOGLE_SIGN_OUT') {
    signOut().then(sendResponse).catch(error => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (message.type === 'GENERATE_COMMENT') {
    generateComment(message.payload).then(sendResponse).catch(error => sendResponse({ ok: false, error: error.message }));
    return true;
  }
});

async function signIn() {
  const token = await chrome.identity.getAuthToken({ interactive: true });
  const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${token.token || token}` }
  });

  if (!response.ok) {
    throw new Error('Google sign-in succeeded, but profile lookup failed.');
  }

  const profile = await response.json();
  await chrome.storage.local.set({ googleProfile: profile });
  return { ok: true, profile };
}

async function signOut() {
  const token = await chrome.identity.getAuthToken({ interactive: false }).catch(() => null);
  const tokenValue = token && (token.token || token);
  if (tokenValue) {
    await chrome.identity.removeCachedAuthToken({ token: tokenValue });
  }
  await chrome.storage.local.remove('googleProfile');
  return { ok: true };
}

async function generateComment(payload) {
  const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
  if (!settings.googleAiKey) {
    throw new Error('Add your Google AI key in Settings before generating comments.');
  }

  const prompt = buildPrompt(payload, settings);
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(settings.googleAiKey)}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.75, maxOutputTokens: 220 }
    })
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google AI request failed: ${details}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map(part => part.text).join('').trim();
  if (!text) {
    throw new Error('Google AI did not return a comment. Try again with more profile or post context.');
  }

  return { ok: true, comment: text.replace(/^"|"$/g, '') };
}

function buildPrompt(payload, settings) {
  return `Write one LinkedIn comment.\n\nRules:\n- Sound human, specific, and professional.\n- Do not mention that AI wrote it.\n- Avoid hashtags unless the post asks for them.\n- Avoid generic praise like "great post" unless paired with a specific insight.\n- Length: ${settings.commentLength}.\n- Tone: ${payload.tone || settings.defaultTone}.\n\nViewer profile:\n${payload.viewerProfile || 'Not provided'}\n\nLinkedIn author/profile context:\n${payload.authorProfile || 'Not detected'}\n\nPost context:\n${payload.postText || 'Not detected'}\n\nReturn only the final comment.`;
}

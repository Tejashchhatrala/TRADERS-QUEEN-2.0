const defaults = {
  googleAiKey: '',
  viewerProfile: '',
  tones: ['Insightful', 'Supportive', 'Curious'],
  defaultTone: 'Insightful',
  commentLength: 'medium'
};
const fields = ['googleAiKey', 'viewerProfile', 'tones', 'defaultTone', 'commentLength'];

async function load() {
  const settings = await chrome.storage.sync.get(defaults);
  for (const field of fields) {
    const element = document.querySelector(`#${field}`);
    element.value = Array.isArray(settings[field]) ? settings[field].join(', ') : settings[field];
  }
}

document.querySelector('#save').addEventListener('click', async () => {
  const settings = Object.fromEntries(fields.map(field => [field, document.querySelector(`#${field}`).value.trim()]));
  settings.tones = settings.tones.split(',').map(tone => tone.trim()).filter(Boolean);
  await chrome.storage.sync.set(settings);
  document.querySelector('#saved').textContent = 'Settings saved.';
});

load();

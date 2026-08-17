const BUTTON_CLASS = 'lai-comment-button';

function getPostText(node) {
  const post = node.closest('.feed-shared-update-v2, .occludable-update, article') || document;
  return post.innerText.slice(0, 2500);
}

function getAuthorProfile(node) {
  const post = node.closest('.feed-shared-update-v2, .occludable-update, article') || document;
  const author = post.querySelector('.update-components-actor__title, .feed-shared-actor__title, a[href*="/in/"]');
  const headline = post.querySelector('.update-components-actor__description, .feed-shared-actor__description');
  return [author?.innerText, headline?.innerText].filter(Boolean).join('\n');
}

function findCommentBoxes() {
  return [...document.querySelectorAll('[contenteditable="true"]')]
    .filter(box => /comment|reply/i.test(box.getAttribute('aria-label') || box.closest('form')?.innerText || ''));
}

function injectButtons() {
  for (const box of findCommentBoxes()) {
    if (box.parentElement?.querySelector(`.${BUTTON_CLASS}`)) continue;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = BUTTON_CLASS;
    button.textContent = 'AI comment';
    button.addEventListener('click', () => generateForBox(box, button));
    box.parentElement?.appendChild(button);
  }
}

async function generateForBox(box, button) {
  const { viewerProfile = '', defaultTone = 'Insightful' } = await chrome.storage.sync.get(['viewerProfile', 'defaultTone']);
  button.disabled = true;
  button.textContent = 'Writing...';

  chrome.runtime.sendMessage({
    type: 'GENERATE_COMMENT',
    payload: {
      viewerProfile,
      tone: defaultTone,
      authorProfile: getAuthorProfile(box),
      postText: getPostText(box)
    }
  }, response => {
    button.disabled = false;
    button.textContent = 'AI comment';

    if (!response?.ok) {
      alert(response?.error || 'Unable to generate comment.');
      return;
    }

    box.focus();
    document.execCommand('selectAll', false, null);
    document.execCommand('insertText', false, response.comment);
    box.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: response.comment }));
  });
}

const observer = new MutationObserver(injectButtons);
observer.observe(document.body, { childList: true, subtree: true });
injectButtons();

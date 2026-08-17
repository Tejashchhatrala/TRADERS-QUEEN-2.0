const statusEl = document.querySelector('#status');
const signInButton = document.querySelector('#signIn');
const signOutButton = document.querySelector('#signOut');

async function refresh() {
  const { googleProfile } = await chrome.storage.local.get('googleProfile');
  statusEl.textContent = googleProfile ? `Signed in as ${googleProfile.email}` : 'Sign in to connect your Google profile.';
}

signInButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'GOOGLE_SIGN_IN' }, response => {
    statusEl.textContent = response?.ok ? `Signed in as ${response.profile.email}` : response?.error || 'Sign-in failed.';
  });
});

signOutButton.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'GOOGLE_SIGN_OUT' }, () => refresh());
});

refresh();

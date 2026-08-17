import { readFileSync, existsSync } from 'node:fs';

const required = [
  'extension/manifest.json',
  'extension/background.js',
  'extension/content.js',
  'extension/content.css',
  'extension/popup.html',
  'extension/popup.js',
  'extension/options.html',
  'extension/options.js',
  'extension/styles.css'
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}

const manifest = JSON.parse(readFileSync('extension/manifest.json', 'utf8'));
if (manifest.manifest_version !== 3) throw new Error('Manifest must use version 3.');
if (!manifest.permissions.includes('identity')) throw new Error('Google login requires identity permission.');
if (!manifest.host_permissions.includes('https://generativelanguage.googleapis.com/*')) throw new Error('Google AI host permission missing.');
console.log('Extension manifest and required files are valid.');

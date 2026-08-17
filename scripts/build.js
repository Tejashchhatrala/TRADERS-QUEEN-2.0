import { cpSync, rmSync, mkdirSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('extension', 'dist', { recursive: true });
console.log('Chrome extension copied to dist/. Load dist/ as an unpacked extension.');

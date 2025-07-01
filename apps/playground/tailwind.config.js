module.exports = {
  presets: [require('@velvet-ui/core/tailwind.config.js')],
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
    '../../packages/core/src/**/*.{ts,tsx}',
  ],
};
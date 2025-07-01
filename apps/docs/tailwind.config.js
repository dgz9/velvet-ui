module.exports = {
  presets: [require('@velvet-ui/core/tailwind.config.js')],
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/core/src/**/*.{ts,tsx}',
  ],
};
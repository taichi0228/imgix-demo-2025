/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        // 「Noto Sans JP」をデフォルトの sans に設定
        sans: ['"Noto Sans JP"', 'ui-sans-serif', 'system-ui'],
      },
      // お好みでカスタムカラーなども追加できます
      colors: {
        primary: '#1f2937', // 例: 濃いグレー
        accent: '#d4af37',  // 例: 高級感のあるゴールド
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

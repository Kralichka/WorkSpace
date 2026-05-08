module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,css}", // Важно: добавьте CSS-файлы
    ],
    theme: {
      extend: {
      fontFamily: {
        body: 'var(--font-body-family)',
      },
        gridTemplateRows: {
        // например, первая строка 100px, вторая 200px, третья auto
        'custom-rows': '100px 200px auto',
      },
      },
    },
    plugins: [],
  }
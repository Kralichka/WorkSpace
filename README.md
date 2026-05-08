# Проект KWork (frontend)

Данный проект на React создавался для переноса популярных сервисов из Karat-service и включает в себя различные приложения, такие как:

- **Мониторинг**
- **Измерения**
- **График работы**
- **Трекер задач**
- И другие приложения...

В будущем возможен полный переезд из приложений группы Karat-web на новую структуру.

## Используемые технологии

В проекте были использованы следующие технологии и библиотеки:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Cookies](https://www.npmjs.com/package/js-cookie)
- [React Hook Form](https://react-hook-form.com/)

## Установка

Чтобы установить проект, выполните следующие шаги:

1. **Скачайте репозиторий:**
   git clone https://git-mes.fab.local/fab/karatfab-frontend.git
2. **Перейдите в директорию проекта:**
   cd ваш-репозиторий
3. **Установите зависимости:**
   npm install
4. **Создайте новую ветку для своей работы:**
   git checkout -b feature/ваша_фича
5. **Запустите приложение:**
   npm run dev

## Взаимодействие с backend
Вы можете найти backend приложений по ссылкам: 
- [ApiGateway](https://git-mes.fab.local/fab/barcodelot)
- [AuthService](https://git-mes.fab.local/fab/barcodelot)
- [MesService](https://git-mes.fab.local/fab/barcodelot)
- [TaskService](https://git-mes.fab.local/fab/barcodelot)
- [WorkScheduleService](https://git-mes.fab.local/fab/barcodelot)
- [LotRequestService](https://git-mes.fab.local/fab/barcodelot)

# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

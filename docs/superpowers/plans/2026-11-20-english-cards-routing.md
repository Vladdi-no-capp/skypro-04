# English Cards Routing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Превратить текущий репозиторий в React/Vite-приложение English Cards с семью страницами, клиентским роутингом и учебной авторизацией через `useState`.

**Architecture:** `BrowserRouter` подключается в `src/main.jsx`, состояние авторизации принадлежит `App.jsx`, а декларация маршрутов находится в `AppRoutes.jsx`. Страницы не хранят постоянные данные: они используют демонстрационный массив карточек и проверяют навигационные сценарии.

**Tech Stack:** React 19, Vite, React Router DOM 7, Styled Components, Vitest, Testing Library.

**Spec:** `docs/superpowers/specs/2026-11-20-english-cards-routing-design.md`

## Global Constraints

- Все семь компонентов страниц находятся в `src/pages`.
- Обязательные маршруты: `/`, `/exit`, `/card/:id`, `/login`, `/register`, `/new-card`, `*`.
- `/`, `/exit`, `/card/:id` и `/new-card` доступны только при `isAuth=true`.
- `isAuth` меняется только через отправку формы входа и подтверждение выхода.
- `id` читается через `useParams` и всегда отображается на странице карточки.
- Переходы интерфейса выполняются средствами React Router без полной перезагрузки.
- Все страницы стилизуются через Styled Components.
- `App.jsx` не содержит данные или разметку каталога карточек.
- `node_modules/` и `dist/` не попадают в Git.
- Ученик выполняет шаги самостоятельно; после каждого маленького шага наставник объясняет и проверяет результат.

## Review Focus

- Прямой переход неавторизованного пользователя на каждый защищённый URL должен закончиться на `/login`.
- Вход должен срабатывать только через submit формы, а не при простом переходе на страницу.
- `/card/1`, `/card/42` и `/card/999` должны показывать соответственно две карточки и состояние «Карточка не найдена» с исходным `id`.
- Отмена выхода не меняет `isAuth`, подтверждение выхода меняет его на `false` и блокирует защищённые маршруты.
- Обновление страницы сбрасывает учебную авторизацию и снова защищает рабочие маршруты.

---

### Task 1: Минимальный React/Vite-проект

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles/GlobalStyle.js`
- Create: `src/test/setup.js`

**Interfaces:**
- Produces: запускаемый Vite-проект; `App()` как корневой компонент; npm-скрипты `dev`, `build`, `test`, `preview`.

- [ ] **Step 1: Добавить в `.gitignore` каталоги `node_modules/`, `dist/` и служебные файлы Vite.**
- [ ] **Step 2: Установить прямые зависимости командой `npm.cmd install react react-dom react-router-dom styled-components`.**
- [ ] **Step 3: Установить инструменты командой `npm.cmd install -D vite @vitejs/plugin-react vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`.**
- [ ] **Step 4: Добавить в `package.json` скрипты `dev`, `build`, `preview`, `test` и указать `type: module`.**
- [ ] **Step 5: Создать `vite.config.js` с React-плагином и Vitest (`environment: "jsdom"`, `setupFiles: "./src/test/setup.js"`).**
- [ ] **Step 6: Создать Vite-точку входа `index.html` с `<div id="root"></div>` и подключением `/src/main.jsx`.**
- [ ] **Step 7: Создать минимальные `main.jsx`, `App.jsx` и `GlobalStyle.js`, чтобы на экране появился заголовок `English Cards`.**
- [ ] **Step 8: Запустить `npm.cmd run build`; ожидается exit code 0 и каталог `dist/`.**
- [ ] **Step 9: Запустить `npm.cmd run dev`, открыть локальный адрес и проверить заголовок `English Cards`.**
- [ ] **Step 10: Commit: `chore: set up React app with Vite`.**

### Task 2: Семь страниц и демонстрационные данные

**Files:**
- Create: `src/data/cards.js`
- Create: `src/pages/LoginPage.jsx`
- Create: `src/pages/RegisterPage.jsx`
- Create: `src/pages/CardsPage.jsx`
- Create: `src/pages/CardPage.jsx`
- Create: `src/pages/NewCardPage.jsx`
- Create: `src/pages/ExitPage.jsx`
- Create: `src/pages/NotFoundPage.jsx`
- Create: `src/pages/pages.test.jsx`

**Interfaces:**
- Produces: `cards` — массив объектов `{ id: string, word: string, translation: string }`, содержащий `id` `1` и `42`; семь именованных React-компонентов страниц.

- [ ] **Step 1: Написать тест, который рендерит каждую страницу и проверяет её уникальный заголовок.**
- [ ] **Step 2: Запустить `npm.cmd test -- src/pages/pages.test.jsx`; ожидается FAIL из-за отсутствующих компонентов.**
- [ ] **Step 3: Создать `cards.js` с минимум двумя карточками: `id: "1"` и `id: "42"`.**
- [ ] **Step 4: Создать семь минимальных страниц с понятными заголовками без логики маршрутов.**
- [ ] **Step 5: Запустить тест страниц; ожидается PASS.**
- [ ] **Step 6: Commit: `feat: add English Cards pages`.**

### Task 3: Маршруты и защита страниц

**Files:**
- Create: `src/components/ProtectedRoute.jsx`
- Create: `src/AppRoutes.jsx`
- Create: `src/AppRoutes.test.jsx`
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`

**Interfaces:**
- Consumes: семь компонентов страниц из Task 2.
- Produces: `ProtectedRoute({ isAuth, children })`; `AppRoutes({ isAuth, setIsAuth })`; `App()` с `const [isAuth, setIsAuth] = useState(false)`.

- [ ] **Step 1: Написать тест: при `isAuth=false` URL `/`, `/new-card`, `/card/1` и `/exit` показывают страницу входа.**
- [ ] **Step 2: Написать тест: маршруты `/login`, `/register` и неизвестный URL показывают соответствующие публичные страницы.**
- [ ] **Step 3: Запустить `npm.cmd test -- src/AppRoutes.test.jsx`; ожидается FAIL, потому что маршруты ещё не созданы.**
- [ ] **Step 4: Реализовать `ProtectedRoute`: при отсутствии авторизации вернуть `<Navigate to="/login" replace />`, иначе `children`.**
- [ ] **Step 5: Реализовать все семь `Route` в `AppRoutes.jsx`, обернув четыре рабочих маршрута в `ProtectedRoute`.**
- [ ] **Step 6: В `App.jsx` создать `isAuth` через `useState(false)` и передать состояние и setter в `AppRoutes`.**
- [ ] **Step 7: Обернуть `<App />` в `<BrowserRouter>` только в `main.jsx`.**
- [ ] **Step 8: Запустить тесты маршрутов; ожидается PASS.**
- [ ] **Step 9: Commit: `feat: add protected application routes`.**

### Task 4: Вход, регистрация и выход

**Files:**
- Modify: `src/pages/LoginPage.jsx`
- Modify: `src/pages/RegisterPage.jsx`
- Modify: `src/pages/ExitPage.jsx`
- Modify: `src/AppRoutes.jsx`
- Modify: `src/AppRoutes.test.jsx`

**Interfaces:**
- `LoginPage({ onLogin })` вызывает `onLogin()` только через submit.
- `RegisterPage()` после submit переходит на `/login`.
- `ExitPage({ onLogout })` подтверждает выход через `onLogout()`, отменяет переходом на `/`.

- [ ] **Step 1: Написать пользовательский тест: submit логина открывает каталог и разрешает защищённые маршруты.**
- [ ] **Step 2: Написать тесты регистрации, отмены выхода и подтверждения выхода.**
- [ ] **Step 3: Запустить тесты; ожидается FAIL на отсутствующих обработчиках.**
- [ ] **Step 4: Реализовать формы через `onSubmit`, `event.preventDefault()` и `useNavigate`.**
- [ ] **Step 5: Передать из `AppRoutes` обработчики `setIsAuth(true)` и `setIsAuth(false)` соответствующим страницам.**
- [ ] **Step 6: Для авторизованного пользователя перенаправлять `/login` и `/register` на `/`.**
- [ ] **Step 7: Запустить тесты; ожидается PASS.**
- [ ] **Step 8: Commit: `feat: implement login and logout flow`.**

### Task 5: Навигация по учебным карточкам

**Files:**
- Modify: `src/pages/CardsPage.jsx`
- Modify: `src/pages/CardPage.jsx`
- Modify: `src/pages/NewCardPage.jsx`
- Modify: `src/AppRoutes.test.jsx`

**Interfaces:**
- `CardsPage` использует `cards` и создаёт `Link` для каждого `/card/:id`, а также ссылки `/new-card` и `/exit`.
- `CardPage` читает `{ id } = useParams()`, ищет карточку в `cards`, всегда показывает `id`.

- [ ] **Step 1: Написать тесты переходов по ссылкам карточек `1` и `42`, а также состояния `/card/999`.**
- [ ] **Step 2: Написать тесты закрытия карточки и submit/закрытия новой карточки с возвратом на `/`.**
- [ ] **Step 3: Запустить тесты; ожидается FAIL на отсутствующей навигации.**
- [ ] **Step 4: Вывести каталог из `cards` и заменить все внутренние переходы компонентами `Link`.**
- [ ] **Step 5: Реализовать `CardPage` с `useParams`, явным `id` и сообщением `Карточка не найдена`.**
- [ ] **Step 6: Реализовать демонстрационные формы просмотра/редактирования и добавления с возвратом на `/`.**
- [ ] **Step 7: Запустить тесты; ожидается PASS.**
- [ ] **Step 8: Commit: `feat: add English card navigation`.**

### Task 6: Styled Components и визуальная структура

**Files:**
- Create: `src/styles/Auth.styled.js`
- Create: `src/styles/Cards.styled.js`
- Create: `src/styles/Modal.styled.js`
- Create: `src/styles/NotFound.styled.js`
- Modify: `src/styles/GlobalStyle.js`
- Modify: `src/pages/*.jsx`

**Interfaces:**
- Produces: переиспользуемые styled-компоненты для форм, каталога, модальных экранов и 404 без CSS-классов старого макета.

- [ ] **Step 1: Перенести базовые цвета, шрифты и reset в `GlobalStyle`.**
- [ ] **Step 2: Стилизовать страницы входа и регистрации через общие компоненты `Auth.styled.js`.**
- [ ] **Step 3: Стилизовать каталог и карточки через `Cards.styled.js`.**
- [ ] **Step 4: Стилизовать Card/NewCard/Exit как модальные экраны через `Modal.styled.js`.**
- [ ] **Step 5: Стилизовать 404 и проверить ширины 320px, 768px и desktop вручную.**
- [ ] **Step 6: Запустить `npm.cmd test` и `npm.cmd run build`; оба завершаются без ошибок.**
- [ ] **Step 7: Commit: `style: add English Cards interface`.**

### Task 7: Очистка, полная проверка и PR

**Files:**
- Delete after verification: `main.html`, `modal/`, `css/`, `js/script.js`
- Review before deletion: `images/`
- Delete empty drafts: `utils/`, `icons/`
- Modify if needed: `README.md`

**Interfaces:**
- Produces: чистый репозиторий с одной точкой входа Vite и инструкциями запуска.

- [ ] **Step 1: Через `rg` проверить, используются ли файлы из `images/`; сохранить используемые ресурсы, удалить только неиспользуемое старое содержимое.**
- [ ] **Step 2: Удалить старую HTML/CSS/JS-версию и пустые ошибочные заготовки только после успешного запуска React-приложения.**
- [ ] **Step 3: Обновить README командами `npm install`, `npm run dev`, `npm test`, `npm run build`.**
- [ ] **Step 4: Выполнить `npm.cmd test`; ожидается 0 failed tests.**
- [ ] **Step 5: Выполнить `npm.cmd run build`; ожидается exit code 0.**
- [ ] **Step 6: В браузере пройти полный сценарий: защита → регистрация → вход → карточки 1/42/999 → новая карточка → отмена выхода → подтверждение выхода → 404.**
- [ ] **Step 7: Проверить `git status`, убедиться, что `node_modules/` и `dist/` отсутствуют в изменениях.**
- [ ] **Step 8: Commit: `chore: finalize routing homework`.**
- [ ] **Step 9: Push отдельной ветки и создание PR с описанием маршрутов и результатов проверки.**


![Fashion Flow Typing](https://readme-typing-svg.demolab.com?font=Dancing+Script&weight=700&size=25&pause=1000&color=FF006E&width=435&lines=Fashion+Server+v1.0;Elevating+Digital+Style;Smart+Clothing+Management;Designed+for+the+Modern+Trend)

# Fashion - Modern E-Commerce Storefront: (⚠️WIP: Developing & Expanding LOCALLY⚠️)
A frontend e-commerce storefront for fashion retail, built as a single-page application with React 19 and Vite.

#### [🌐Explore Live Site](https://fashion-storefront.netlify.app/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![SweetAlert2](https://img.shields.io/badge/SweetAlert2-JS%20popup%20library-purple?style=flat-square)](https://sweetalert2.github.io/)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=flat-square&logo=githubactions&logoColor=white)

---

## The Problem

The challenge here was building a frontend that *feels* like a real storefront: products are browsable and filterable, cart state is shared across the app, navigation resets scroll position correctly, and the UI responds naturally across all screen sizes without fighting the layout system.

---

## The Solution

The application is structured around centralized state management via React Context, keeping cart and session data available across all views without prop drilling. Routing is handled by React Router v7 with a custom `ScrollToTop` component that resets position on every route change, but it's the difference between a prototype and something that actually feels polished.

Also Bootstrap 5 handles the responsive grid and utility layer, with custom CSS scoped per component to avoid specificity conflicts.

---

## Architecture

```
src/
├── components/       # Shared UI elements (Navbar, Footer, ProductCard, etc.)
├── pages/            # Route-level components (Home, ProductView, Cart, Register...)
├── data/             # Static product catalog and category definitions
├── hooks/            # Custom hooks
└── main.jsx          # App entry with router and context providers
```

---

## Tech Decisions

| Decision | Why |
|---|---|
| **React 19** | Concurrent features and improved rendering for list-heavy catalog pages |
| **Vite** over CRA | Significantly faster HMR in development; leaner build output in production |
| **React Router v7** | File-system-like route definitions; cleaner nested layout support |
| **Bootstrap 5** (no jQuery) | Fast utility-first responsive grid without a JS runtime dependency |
| **SweetAlert2** for feedback | Consistent, accessible modals for cart actions and form confirmations no custom modal code needed |
| **Context API** over Redux | The state scope here doesn't justify a full Redux setup; Context keeps it maintainable |


---

## Setup

```bash
git clone https://github.com/Wahab-Al/Fashion.git
cd Fashion
npm install
npm run dev
```

Production build:
```bash
npm run build
```

---

## Screenshots

![Main Page](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/mainPage.png)
![Customer Voices](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/customVoices.png)
![Categories](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/categories.png)
![Team](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/Team.png)
![Item View](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/itemView.png)
![Register](https://raw.githubusercontent.com/Wahab-Al/Fashion/3a7cb854c6ebd4f24330a60a37330eec7307314b/public/screenshots/register.png)


## License

MIT

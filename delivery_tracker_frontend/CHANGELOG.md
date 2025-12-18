# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-12-18
### Added
- Initialized frontend with Vite 6 + React 18 template.
- Added React 18.3, React DOM 18.3, and React Router DOM 6.28.
- Configured TypeScript 5.7 and ESLint 9 with react-hooks plugin.
- Basic app scaffold: routing (Home, Dashboard), index.html, Vite config.

### Notes
- This setup aligns with a modern React ecosystem and provides a clean base to implement delivery tracking UI and real-time features.
- Use `npm run dev` to start, `npm run build` to produce a production bundle, and `npm run preview` to serve the built app.

### Breaking changes handled
- React Router v6 routing structure (`Routes`/`Route` with `element`).
- React 18 root API via `ReactDOM.createRoot`.

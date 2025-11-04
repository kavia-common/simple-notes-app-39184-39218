# Simple Notes App — Astro Frontend

A modern, single-page notes UI implemented in Astro with the Ocean Professional theme. It provides a sidebar list of notes and a main editor/viewer pane with create, view, edit, and delete capabilities.

- Minimal client-side JS (Astro islands pattern) for interactivity
- Theming matches Ocean Professional (primary #2563EB, secondary/success #F59E0B, error #EF4444, background #f9fafb, surface #ffffff, text #111827)
- Data service that uses PUBLIC_API_BASE if present, otherwise falls back to localStorage for session persistence
- Loading/error states, responsive layout, and basic accessibility

## Features

- Sidebar with searchable notes list and “New” button
- Main pane editor with title and content fields
- Create, update, delete notes
- In-memory persistence via localStorage when no backend is configured
- Clean DataService abstraction to swap in REST later without changing UI

## Getting Started

From the notes_frontend directory:

```bash
npm install
npm run dev
```

By default the dev server binds to 0.0.0.0:3000 (configured in astro.config.mjs).

To build and preview:

```bash
npm run build
npm run preview
```

## Environment Variables

This app reads Astro public environment variables (those prefixed with PUBLIC_). The primary one used for data is:

- PUBLIC_API_BASE: Optional. If set, the frontend will attempt to call `${PUBLIC_API_BASE}/notes` for CRUD operations:
  - GET /notes
  - POST /notes
  - PUT /notes/{id}
  - DELETE /notes/{id}
  If requests fail, the app automatically falls back to localStorage for persistence.

Other available variables (not currently required for basic functionality but reserved for integration):

- PUBLIC_BACKEND_URL
- PUBLIC_FRONTEND_URL
- PUBLIC_WS_URL
- PUBLIC_NODE_ENV
- PUBLIC_NEXT_TELEMETRY_DISABLED
- PUBLIC_ENABLE_SOURCE_MAPS
- PUBLIC_PORT
- PUBLIC_TRUST_PROXY
- PUBLIC_LOG_LEVEL
- PUBLIC_HEALTHCHECK_PATH
- PUBLIC_FEATURE_FLAGS
- PUBLIC_EXPERIMENTS_ENABLED

Example `.env` (do not commit secrets):

```
PUBLIC_API_BASE=http://localhost:8080
PUBLIC_NODE_ENV=development
```

Note: Do not write the .env file in code. Provide environment variables via your deployment environment or local .env.

## Architecture

- src/pages/index.astro: Main notes UI with sidebar and editor, and a small client script that wires up CRUD and state management.
- src/layouts/Layout.astro: Defines theme variables, base structure, and utility classes.
- src/lib/dataService.ts: Exported DataService abstraction that can be reused and replaced by REST without changing UI.

## Accessibility

- Semantic roles for listbox/options
- Labels for form fields
- Aria-live regions for dynamic titles and statuses
- Keyboard activation via Enter/Space on list items

## Theming

Uses the Ocean Professional palette with subtle shadows, rounded corners, transitions, and a dark mode toggle component.

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview built site
- `npm run lint` — Run ESLint

## Notes

- When no backend is available, notes persist in localStorage under `notes-app-items`.
- If you later provide a REST backend, set `PUBLIC_API_BASE` to point to it. The UI will call the REST endpoints automatically.


# simple-notes-app-39184-39218

This workspace contains the Astro-based notes frontend.

- Container: notes_frontend
- Framework: Astro

Quick start:

```bash
cd notes_frontend
npm install
npm run dev
```

The app runs at http(s)://localhost:3000 by default (or as configured in astro.config.mjs).

For backend integration, set PUBLIC_API_BASE in your environment to the base URL that exposes:
- GET /notes
- POST /notes
- PUT /notes/{id}
- DELETE /notes/{id}

If not provided, the app falls back to localStorage persistence.
# Project Context

## High-Level
Monorepo workspace mata kuliah Pemrograman Web — kumpulan latihan, tugas, dan proyek asesmen.

## Tech Stack
- HTML/CSS/JS vanilla (no framework, no bundler)
- PHP (beberapa tugas)
- Composer (hanya untuk QR Code)
- GitHub Pages (deployment)

## Architecture
Dashboard utama pakai **MVC pattern**:
- `assets/js/data/` → Data layer (fetch JSON)
- `assets/js/models/` → Entity
- `assets/js/services/` → Business logic
- `assets/js/views/` → DOM rendering
- `assets/js/controllers/` → Orchestrator
- Entry point: `assets/js/main.js` (DI wiring)

## Code Conventions
- Gunakan ES Modules (`type="module"`) untuk JS
- Kelas pake `export class`
- Nama file PascalCase untuk class, camelCase untuk utility
- CSS variables di `:root` untuk theming (dark/light)
- Bahasa: Indonesia untuk dashboard, Inggris untuk portfolio

## Project Structure (Key Paths)
```
/index.html               → Dashboard utama
/assets/js/               → MVC engine dashboard
/assets/css/              → Stylesheets
/apps/main/               → Portfolio site
/apps/uts-frontend/       → UTS FathurNEWS
/apps/latihanjs/          → Latihan JavaScript
/apps/latihan-1/          → Latihan HTML/CSS
/apps/php/tugas/          → PHP tasks
```

## Common Tasks
- Menambah proyek baru: edit `assets/js/data/projects.json`
- Ganti layout: edit CSS variables di `assets/css/style.css`
- Deploy: push ke branch `main`, GitHub Pages otomatis

## Notes
- Tidak ada package.json frontend — semua vanilla
- Path gambar relatif dari root repo
- Ada beberapa dead code (OrderService.js, ui.js)

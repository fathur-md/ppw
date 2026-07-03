# Analisis Project — Pemrograman Web

> Analisis menyeluruh terhadap struktur, arsitektur, dan desain project workspace perkuliahan Pemrograman Web.

---

## 1. Ringkasan High-Level

Ini adalah **monorepo workspace** untuk mata kuliah **Pemrograman Web** — kumpulan latihan, tugas, dan proyek asesmen (UTS/ASN) milik Fathurrahman Muhammad.

| Layer | Deskripsi |
|---|---|
| **Dashboard Utama** (`index.html` + JS MVC) | Portal index semua proyek, dengan fitur search, sort, grid/list toggle |
| **Portfolio Site** (`apps/main/`) | Website portfolio personal (Home, Portfolio, About) — dark theme |
| **UTS Frontend** (`apps/uts-frontend/`) | Portal berita "FathurNEWS" — mock data JSON, vanilla JS |
| **Latihan JS** (`apps/latihanjs/`) | Dua sub-app: OOP class-based (BankAccount, Student) + functional cart dengan store pattern |
| **Latihan HTML/CSS** (`apps/latihan-1/`, `apps/latihan-2/`) | Latihan awal: portofolio sederhana, car rental |
| **PHP Tasks** (`apps/php/tugas/`) | Login logic, QR code generator (Composer + Endroid), kasir KFC |
| **Shared Assets** (`assets/`) | CSS, JS (MVC), images, file PDF |

**Teknologi:** 100% vanilla (HTML, CSS, JS modules, PHP). Tidak ada framework frontend. Satu-satunya dependency eksternal adalah `endroid/qr-code` via Composer untuk PHP.

**Deployment:** GitHub Pages (diverifikasi dari README links).

---

## 2. Diagram Alur Sederhana

### 2.1 Dashboard Utama (MVC)

```
User buka index.html
    ↓
assets/js/main.js  (entry point — dependency injection)
    │
    ├── ProjectDataSource.getProjects()
    │       ↓ fetch → projects.json
    │
    ├── ProjectService.loadProjects()
    │       ↓ map → ProjectModel[]
    │
    └── ProjectController.init()
            │
            ├── renderProjects()
            │     ├── service.searchProjects(query) → filter
            │     ├── service.sortProjects(mode) → sort
            │     └── view.render(projects, mode) → DOM
            │
            ├── setupSort()      → <select> change listener
            ├── setupSearch()    → input listener (debounce 500ms)
            └── setupLayout()    → grid/list toggle + localStorage
```

### 2.2 UTS Frontend (FathurNEWS)

```
index.html → js/main.js (type=module)
  ├── renderNavbar()       → inject ke #navbar
  ├── renderHeadline()     → getNews() → slice(0,3) → #headline
  └── renderHomeNews()     → getNews() → map cards → #news-grid
        ↑
  js/services/news.js
    └── loadMockNews()
          └── fetch → js/utils/news.json
```

### 2.3 LatihanJS — Functional Cart

```
index.html → functional/src/app.js
  ├── renderHeader()       → Header component
  ├── renderProductList()  → ProductList component
  └── renderCart()         → Cart component
        ↑
  store/store.js
    └── createStore()      → Proxy-based reactive state
```

### 2.4 PHP — Studi Kasus QR Code

```
index.php (form input)
    ↓ POST
generate.php
  ├── require autoload.php (Composer)
  ├── Endroid\QrCode → generate QR
  └── tampilkan <img src="data:uri">
```

---

## 3. Penjelasan Per Modul

### 3.1 `assets/js/` — MVC Dashboard

| File | Peran | Ketergantungan |
|---|---|---|
| `main.js` | Entry point, wiring DI | Semua kelas di bawah |
| `controllers/ProjectController.js` | Orchestrator: init, event handlers, render pipeline | Service + View |
| `services/ProjectService.js` | Bisnis logic: load, sort, search | ProjectModel, DataSource |
| `views/ProjectView.js` | DOM manipulation: render cards, empty state, layout class | Container element |
| `models/ProjectModel.js` | Entity class untuk data project | — |
| `data/ProjectDataSource.js` | Data access: fetch projects.json | — |
| `data/LocalStorage.js` | Utility wrapper untuk localStorage (tidak dipakai dashboard) | — |
| `data/projects.json` | Data source statis (8 proyek) | — |

### 3.2 `apps/uts-frontend/` — Portal Berita

| File | Peran |
|---|---|
| `js/main.js` | Entry point, render headline + news grid |
| `js/services/news.js` | Fetch mock JSON + filter query |
| `js/components/navbar.js` | Inject navbar HTML |
| `js/ui.js` | **Dead code** — duplikasi renderNavbar |
| `js/utils/news.json` | Mock data berita |
| `css/style.css`, `about.css`, `services.css` | Styling |

### 3.3 `apps/latihanjs/` — Latihan JavaScript

**OOP App:**
| File | Peran |
|---|---|
| `app.js` | Entry point: instansiasi Student, BankAccount, render |
| `models/Student.js` | Class Student (name, age, nim, major) |
| `models/Person.js` | Base class Person |
| `models/BankAccount.js` | Class BankAccount (deposit, withdraw, getBalance) |
| `models/ProductService.js` | Service untuk get products dari data/products.js |
| `models/CartService.js` | Cart logic (tambahItem, hapusItem) |
| `models/OrderService.js` | **Dead code** — hanya berisi komentar |
| `ui/ProductUI.js` | Render daftar produk ke DOM |
| `ui/CartUI.js` | Render cart items + total |
| `ui/Header.js` | Render header component |

**Functional App:**
| File | Peran |
|---|---|
| `functional/src/app.js` | Entry point, init components |
| `functional/src/store/store.js` | Proxy-based reactive store (state, subscribe) |
| `functional/src/components/` | Component functions: Header, ProductList, Cart |

### 3.4 `apps/php/tugas/` — PHP Tasks

| File | Peran |
|---|---|
| `login-logic/index.php` | Form login + validasi sederhana (admin/12345) |
| `studi-kasus/index.php` | Form input mahasiswa |
| `studi-kasus/generate.php` | Generate QR Code via Endroid library |
| `tugas-function/index.php` | Aplikasi kasir KFC (subtotal, diskon, PPN) |
| `tugas-function/function.php` | Fungsi helpers: hitungSubtotal, hitungDiskon, hitungPPN, hitungTotal |

### 3.5 `assets/css/` — CSS

| File | Peran |
|---|---|
| `style.css` | **Main stylesheet dashboard** — 919 baris (reset, variables, components, animations) |
| `shared.css` | **Portfolio theme** — dark mode, navbar, hero, buttons (314 baris) |
| `portfolio.css` | Portfolio page-specific styling (353 baris) |
| `about.css` | About page-specific styling |
| `archive.css` | Archive page styling (tidak dipakai?) |

**Issue:** Banyak duplikasi antara file (variable definitions, reset, animations — khususnya `fadeIn` dan `fadeUp`).

### 3.6 `apps/main/` — Portfolio Site

| File | Peran |
|---|---|
| `index.html` | Hero page "FathurDEV" + Google Analytics |
| `portfolio/index.html` | Portfolio: profile, tech specs, project gallery, contact form |
| `about/index.html` | About page: bio, education, design philosophy |

---

## 4. Catatan Masalah Desain / Struktur

| # | Masalah | Lokasi | Severity |
|---|---|---|---|
| 1 | **Redundansi CSS** — Banyak deklarasi duplikat antar file CSS (reset, variables, animasi `fadeIn`/`fadeUp`, utility classes) | `assets/css/*.css` | Medium |
| 2 | **Dead code** — `OrderService.js` hanya berisi komentar, tidak dipanggil mana pun | `apps/latihanjs/models/OrderService.js` | Low |
| 3 | **Dead code** — `ui.js` panggil `renderNavbar()` padahal `main.js` juga panggil, duplikasi inisialisasi | `apps/uts-frontend/js/ui.js` | Low |
| 4 | **Typo `_black` → `_blank`** — `window.open` pakai `'_black'` (salah eja) di 2 tempat | `apps/uts-frontend/js/main.js:23,46` | Medium |
| 5 | **Inline CSS dalam HTML** — Campuran inline `<style>` dan file CSS eksternal, menyulitkan maintain | `apps/uts-frontend/index.html`, `apps/main/portfolio/index.html` | Low |
| 6 | **TODO terbengkalai** — Ada komentar TODO untuk relative path fix yang belum dikerjakan | `apps/main/portfolio/index.html:19-21`, `apps/main/about/index.html:16-18` | Low |
| 7 | **LocalStorage utility tidak dipakai** — `LocalStorage.js` ada tapi dashboard akses `localStorage` langsung | `assets/js/data/LocalStorage.js` vs `assets/js/controllers/ProjectController.js:87` | Low |
| 8 | **Inkonsistensi bahasa** — Dashboard pake Bahasa Indonesia, portfolio pake English, campur aduk | Seluruh project | Low |
| 9 | **Path relatif projects.json** — Field `img` dan `link` pake `./assets/img/...` yang bisa broken tergantung URL akses | `assets/js/data/projects.json` | Medium |
| 10 | **Inkonsistensi arsitektur** — Setiap sub-app punya pola organisasi berbeda (ada MVC, modular, inline) | Semua `apps/*` | Medium |

---

## 5. Saran Refactor Prioritas Tinggi

### P1 — Critical
1. **Fix typo `_black` → `_blank`** di `apps/uts-frontend/js/main.js` baris 23 dan 46
2. **Hapus dead code** — `apps/uts-frontend/js/ui.js` (duplikasi), `apps/latihanjs/models/OrderService.js` (comment-only)

### P2 — Structural
3. **Konsolidasi CSS** — Pisahkan shared reset/variables/animations ke `assets/css/base.css`, sisakan page-specific di file masing-masing. Banyak duplikasi `@keyframes fadeIn` dan `fadeUp` antara `assets/css/style.css`, `shared.css`, `portfolio.css`.
4. **Adopsi `LocalStorage.js` secara konsisten** — Ganti akses `localStorage` langsung di `ProjectController.js` dengan utility class yang sudah ada.
5. **Evaluasi path relatif di projects.json** — Pastikan `img` dan `link` path konsisten di semua environment (local vs GitHub Pages).

### P3 — Best Practice
6. **Standarisasi pola arsitektur** — Untuk project ke depan, adopsi pola MVC seperti dashboard utama sebagai blueprint.
7. **Konsistensi bahasa** — Pilih satu bahasa (Indonesia atau Inggris) per project dan konsisten.
8. **Bersihkan TODO yang terbengkalai** — Fix relative path di halaman portfolio dan about.

---

## 6. Mental Model End-to-End

```
┌──────────────────────────────────────────────────────────────┐
│                    ppw/ (GitHub Pages)                       │
│                                                              │
│  index.html  ←───  assets/js/main.js (MVC)                  │
│    │                    │                                    │
│    │                    ├── ProjectDataSource  ──→ projects.json  │
│    │                    ├── ProjectService     ──→ ProjectModel    │
│    │                    ├── ProjectView        ──→ DOM             │
│    │                    └── ProjectController  ──→ orchestrator    │
│    │                                                              │
│    ├── apps/main/            (Portfolio Site)                     │
│    │   ├── index.html        (Hero)                               │
│    │   ├── portfolio/        (Projects + Contact)                 │
│    │   └── about/            (About Me)                           │
│    │                                                              │
│    ├── apps/uts-frontend/    (FathurNEWS — UTS)                    │
│    │                                                              │
│    ├── apps/latihanjs/       (JS Exercises)                       │
│    │   ├── app.js            (OOP: Student, BankAccount)           │
│    │   └── functional/       (Reactive store pattern)             │
│    │                                                              │
│    ├── apps/latihan-{1,2}/   (HTML/CSS Exercises)                 │
│    │                                                              │
│    ├── apps/php/tugas/       (PHP Tasks)                          │
│    │   ├── login-logic/      (Form validation)                    │
│    │   ├── studi-kasus/      (QR Code generator)                  │
│    │   └── tugas-function/   (KFC Cashier)                        │
│    │                                                              │
│    └── assets/               (Shared resources)                   │
│        ├── css/              (4 stylesheets, redundant)           │
│        ├── js/               (MVC engine)                         │
│        ├── img/              (Project screenshots/icons)          │
│        └── file/             (PDF prototypes)                     │
│                                                              │
│  ════════════════════════════════════════════════════════       │
│  Karakteristik:                                               │
│  • No framework / bundler — vanilla JS modules                │
│  • No package.json — kecuali Composer untuk PHP QR            │
│  • 100% static — bisa di-host di GitHub Pages langsung         │
│  • Cocok untuk dokumentasi & pengumpulan tugas kuliah         │
└──────────────────────────────────────────────────────────────┘
```

---

**Disusun oleh:** Opencode AI — Analisis berbasis kode, Juli 2026.

# Refactor Target — Struktur Ideal

> Target struktur folder setelah refactor. Semua perubahan backward-compatible (path lama tetap jalan atau redirect).

---

## Fase 0: Bersihkan Dead Code

```
SEBELUM                                SESUDAH
├── assets/js/data/LocalStorage.js     ❌ HAPUS (tidak dipakai)
├── apps/uts-frontend/js/ui.js         ❌ HAPUS (duplikasi)
├── apps/latihanjs/models/OrderService.js ❌ HAPUS (dead code)
├── apps/latihanjs/test.js             ❌ HAPUS (tidak dipakai)
├── assets/css/archive.css             ❌ HAPUS (tidak di-link)
├── apps/uts-frontend/css/about.css    ❌ HAPUS (tidak di-link)
├── apps/uts-frontend/css/services.css ❌ HAPUS (tidak di-link)
```

---

## Fase 1: Konsolidasi CSS

### 1. Struktur CSS Baru

```
SEBELUM                                 SESUDAH
assets/css/                             assets/css/
├── style.css          (919 baris)      ├── base.css          ← reset + variables + animations (dari style.css)
├── shared.css         (314 baris)      ├── dashboard.css     ← component styles untuk index.html (dari style.css)
├── portfolio.css      (353 baris)      ├── portfolio.css     ← (tetap, untuk apps/main)
├── about.css          (?? baris)       ├── about.css         ← (tetap, untuk apps/main)
├── archive.css        ❌ DEAD          └── (hapus)
```

Detail:
- **`base.css`**: Reset (`*`, `html`, `body`), CSS variables (`:root` + dark mode), utility classes (`.container`, `.container-wide`), animations (`@keyframes`)
- **`dashboard.css`**: Import `base.css`, lalu component styles khusus dashboard (`.hero-section`, `.projects-section`, `.project-card`, `.search-box`, `.layout-switcher`, dll)
- **`portfolio.css`**: Import `base.css` via `shared.css` atau langsung, tetap seperti sekarang
- **`shared.css`**: Opsional — bisa di-retain sebagai theme file untuk portfolio, atau digabung ke `portfolio.css`

### 2. Duplikasi yang Harus Dihapus

| Pattern | Di `style.css` | Di `shared.css` / `portfolio.css` | Tindakan |
|---|---|---|---|
| CSS reset `* { margin:0; padding:0; box-sizing }` | ✅ Ada | ✅ Ada | Pindah ke `base.css` sekali |
| `html { scroll-behavior: smooth }` | ✅ Ada | ✅ Ada | Pindah ke `base.css` sekali |
| `img { max-width:100%; display:block }` | ✅ Ada | ✅ Ada | Pindah ke `base.css` sekali |
| `@keyframes fadeIn` | ✅ Ada (dengan translateY) | ✅ Ada (tanpa translateY) | Konsolidasi jadi satu versi |
| `@keyframes fadeUp` | ❌ | ✅ Ada | Dibiarkan atau digabung |

---

## Fase 2: Homogenisasi Arsitektur JS

### Opsi A: Minimal (Rekomendasi)

Biarin aja setiap sub-app dengan pola masing-masing. Tapi **standarisasi untuk project baru ke depan**:

```
Setiap app baru → ikut pola MVC dashboard:
  apps/nama-app/
  ├── index.html
  ├── css/
  │   └── style.css
  └── js/
      ├── main.js              ← entry + DI wiring
      ├── controllers/
      ├── services/
      ├── views/
      └── data/
```

### Opsi B: Refactor UTS Frontend ke MVC

```
SEBELUM                             SESUDAH
apps/uts-frontend/js/               apps/uts-frontend/js/
├── main.js                         ├── main.js
├── ui.js          ❌ HAPUS         ├── services/
├── components/                     │   └── news.js
│   └── navbar.js                   ├── views/
├── services/                       │   ├── HeadlineView.js
│   └── news.js                     │   ├── NewsGridView.js
└── utils/                          │   └── NavbarView.js
    └── news.json                   └── data/
                                        └── news.json
```

---

## Fase 3: Fix Inconsistencies

### 3.1. Path relatif di `projects.json`

```
SEBELUM:   "img": "./assets/img/latihan1.png"
SESUDAH:   "img": "assets/img/latihan1.png"
```

Hapus titik di depan path agar konsisten dari root.

### 3.2. Fix Typo

| File | Baris | Sebelum | Sesudah |
|---|---|---|---|
| `apps/uts-frontend/js/main.js` | 23 | `'_black'` | `'_blank'` |
| `apps/uts-frontend/js/main.js` | 46 | `'_black'` | `'_blank'` |

### 3.3. Bersihkan TODO

| File | Baris | TODO |
|---|---|---|
| `apps/main/portfolio/index.html` | 19–21 | "Ubah atribut href agar menggunakan relative path yang sesuai" |
| `apps/main/about/index.html` | 16–18 | "Ubah atribut href agar menggunakan relative path yang sesuai" |

---

## Fase 4: Optional — Dependency Injection yg Lebih Rapi

Di `assets/js/main.js`, ganti wiring manual dengan pattern factory/DI container sederhana:

```js
// BEFORE
const source = new ProjectDataSource();
const view = new ProjectView();
const service = new ProjectService(source);
const controller = new ProjectController(service, view);
controller.init();

// AFTER (opsional — hanya jika perlu skalabilitas)
import { createApp } from "./core/Container.js";
const app = createApp()
  .register("dataSource", ProjectDataSource)
  .register("view", ProjectView)
  .register("service", ProjectService, ["dataSource"])
  .register("controller", ProjectController, ["service", "view"])
  .bootstrap();
```

---

## Diagram Perubahan Folder

```
ppw/ (tidak berubah)
├── index.html
├── opencode.md                          ← BARU (project context)
├── ANALISIS_PROJECT.md                  ← BARU
├── DEPENDENCY_MAP.md                    ← BARU
├── CSS_USAGE_AUDIT.md                   ← BARU
├── REFACTOR_TARGET.md                   ← BARU
├── QA_CHECKLIST.md                      ← BARU
├── assets/
│   ├── css/
│   │   ├── base.css                     ← BARU (dari style.css bagian reset/var/animation)
│   │   ├── dashboard.css                ← BARU (dari style.css bagian components)
│   │   ├── shared.css                   ← TETAP (bersihkan dead class)
│   │   ├── portfolio.css                ← TETAP
│   │   ├── about.css                    ← TETAP
│   │   └── archive.css                  ❌ HAPUS
│   ├── js/
│   │   ├── main.js                      ← TETAP
│   │   ├── data/
│   │   │   ├── ProjectDataSource.js     ← TETAP
│   │   │   ├── projects.json            ← TETAP (fix path)
│   │   │   └── LocalStorage.js          ❌ HAPUS
│   │   ├── models/
│   │   │   └── ProjectModel.js          ← TETAP
│   │   ├── services/
│   │   │   └── ProjectService.js        ← TETAP
│   │   ├── views/
│   │   │   └── ProjectView.js           ← TETAP
│   │   └── controllers/
│   │       └── ProjectController.js     ← TETAP
│   ├── img/                             ← TETAP
│   └── file/                            ← TETAP
├── apps/
│   ├── main/                            ← TETAP (fix TODO path)
│   ├── uts-frontend/
│   │   ├── index.html                   ← TETAP
│   │   ├── js/
│   │   │   ├── main.js                  ← TETAP (fix _black typo)
│   │   │   ├── ui.js                    ❌ HAPUS
│   │   │   ├── components/navbar.js     ← TETAP
│   │   │   ├── services/news.js         ← TETAP
│   │   │   └── utils/news.json          ← TETAP
│   │   └── css/
│   │       ├── style.css                ← TETAP
│   │       ├── about.css                ❌ HAPUS
│   │       └── services.css             ❌ HAPUS
│   ├── latihanjs/
│   │   ├── models/
│   │   │   └── OrderService.js          ❌ HAPUS
│   │   └── test.js                      ❌ HAPUS
│   ├── latihan-1/                       ← TETAP
│   ├── latihan-2/                       ← TETAP
│   └── php/                             ← TETAP
└── readME.md                            ← TETAP
```

# Dependency Map

> Peta dependensi antar file JS dan HTML. Berguna sebelum refactor — tahu file mana yang saling terkait, mana yang aman dihapus/dipindah.

---

## 1. Dashboard Utama (`assets/js/`)

```
index.html
  └── <script src="assets/js/main.js"> (module)
        │
        ├── ProjectDataSource  ← assets/js/data/ProjectDataSource.js
        ├── ProjectService     ← assets/js/services/ProjectService.js
        │     └── ProjectModel ← assets/js/models/ProjectModel.js
        ├── ProjectView        ← assets/js/views/ProjectView.js
        └── ProjectController  ← assets/js/controllers/ProjectController.js

[unused] LocalStorage ← assets/js/data/LocalStorage.js (tidak di-import mana pun)
```

### File yang aman dihapus/dipindah:
| File | Status | Catatan |
|---|---|---|
| `assets/js/data/LocalStorage.js` | **UNUSED** | Tidak di-import file lain. Dashboard akses `localStorage` langsung. |

---

## 2. Portfolio Site (`apps/main/`)

```
apps/main/index.html          →  No local JS (hanya Google Analytics)
apps/main/portfolio/index.html →  No JS sama sekali
apps/main/about/index.html    →  No JS sama sekali
```

Semua halaman portfolio **statis HTML+CSS**, tanpa dependensi JS internal.

---

## 3. UTS Frontend (`apps/uts-frontend/`)

```
apps/uts-frontend/{index,about,services}.html
  └── <script src="./js/main.js"> (module)
        │
        ├── renderNavbar  ← js/components/navbar.js
        └── getNews       ← js/services/news.js
                              └── fetch → js/utils/news.json

apps/uts-frontend/js/ui.js    ←  JUGA import renderNavbar (DUPLIKAT)
```

### Masalah:
| File | Status | Catatan |
|---|---|---|
| `js/ui.js` | **DUPLIKAT** | Panggil `renderNavbar()` sekali lagi selain `main.js` — menyebabkan navbar di-render 2x? |
| `js/utils/news.json` | **DIPAKAI** | Data source untuk berita |

---

## 4. LatihanJS OOP (`apps/latihanjs/`)

```
latihanjs/index.html
  ├── <script src="app.js"> (module)
  │     ├── BankAccount ← models/BankAccount.js
  │     └── Student     ← models/Student.js
  │                        └── Person ← models/Person.js
  │
  └── <script src="main.js"> (module)
        │
        ├── CartService     ← models/CartService.js
        ├── ProductService  ← models/ProductService.js
        │     └── products  ← data/products.js
        ├── CartUI          ← ui/CartUI.js
        ├── renderHeader    ← ui/Header.js
        └── ProductUI       ← ui/ProductUI.js
```

### File yang aman dihapus:
| File | Status | Catatan |
|---|---|---|
| `models/OrderService.js` | **DEAD CODE** | Hanya berisi komentar, tidak dipanggil mana pun |
| `test.js` | **UNUSED** | Tidak punya import/export, tidak di-load HTML mana pun |

---

## 5. LatihanJS Functional Cart (`apps/latihanjs/functional/`)

```
latihanjs/functional/index.html
  └── <script src="./src/app.js"> (module)
        │
        ├── renderCart       ← src/components/Cart.js
        │     ├── store      ← src/store/store.js
        │     └── icons      ← src/utils/icons.js
        │
        ├── renderHeader     ← src/components/Header.js
        │     ├── store      ← src/store/store.js
        │     └── icons      ← src/utils/icons.js
        │
        └── renderProductList ← src/components/ProductList.js
              └── store      ← src/store/store.js
```

Semua file terpakai. **Tidak ada dead code** di sub-app ini.

---

## 6. PHP Tasks (`apps/php/tugas/`)

```
tugas/login-logic/index.php  →  Standalone (no require)
tugas/studi-kasus/index.php  →  POST → generate.php
tugas/studi-kasus/generate.php → require __DIR__ . '/../../vendor/autoload.php' (Composer)
tugas/tugas-function/index.php → require function.php
tugas/tugas-function/function.php → Standalone helper functions
```

Semua dependency bersifat lokal dan jelas.

---

## 7. Ringkasan Dead Code

| # | File | Alasan | Aman Dihapus? |
|---|---|---|---|
| 1 | `assets/js/data/LocalStorage.js` | Tidak di-import file lain | ✅ Ya |
| 2 | `apps/uts-frontend/js/ui.js` | Duplikasi inisialisasi navbar | ✅ Ya |
| 3 | `apps/latihanjs/models/OrderService.js` | Hanya komentar | ✅ Ya |
| 4 | `apps/latihanjs/test.js` | Tidak di-load mana pun | ✅ Ya |
| 5 | `assets/css/archive.css` | Tidak di-link HTML mana pun | ✅ Ya |
| 6 | `apps/uts-frontend/css/about.css` | Tidak di-link HTML mana pun | ✅ Ya |
| 7 | `apps/uts-frontend/css/services.css` | Tidak di-link HTML mana pun | ✅ Ya |

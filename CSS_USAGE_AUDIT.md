# CSS Usage Audit

> Audit kelas, ID, dan variable CSS — mana yang dipakai, mana yang mati.

---

## 1. DEAD CSS — Class Tidak Dipakai

### `assets/css/style.css`

| Class | Baris | Catatan Aman Hapus |
|---|---|---|
| `.animate-search-fade` | 762 | Tidak dipakai HTML/JS mana pun |
| `.min-h-45vh` | 917 | Tidak dipakai HTML/JS mana pun |

### `assets/css/shared.css`

| Class | Baris | Catatan Aman Hapus |
|---|---|---|
| `.grid-2` | 79 | Tidak dipakai HTML mana pun |
| `.text-muted` | 118 | Tidak dipakai sebagai class di HTML |
| `.center` | 122 | Tidak dipakai HTML mana pun |
| `.mb-4` | 131 | Tidak dipakai HTML mana pun |

### `assets/css/archive.css` — **ENTIRE FILE DEAD** (95 baris)

| Class | Baris |
|---|---|
| `.archive-body` | 1 |
| `.archive-container` | 9 |
| `.archive-card` | 24 |
| `.card-header` | 45 |
| `.materi-kode` | 52 |
| `.materi-tanggal` | 62 |
| `.card-title` | 68 |
| `.card-desc` | 75 |
| `.card-footer` | 83 |
| `.tech-badge` | 89 |

File ini **tidak pernah di-link** dari HTML mana pun. Aman dihapus.

### `apps/uts-frontend/css/about.css` — **ENTIRE FILE DEAD** (46 baris)

File **tidak pernah di-link**. Semua rule-nya duplikat dari `style.css`.

### `apps/uts-frontend/css/services.css` — **ENTIRE FILE DEAD** (73 baris)

File **tidak pernah di-link**. Semua rule-nya duplikat dari `style.css`.

---

## 2. CSS VARIABLES — Didefinisikan tapi Tidak Dipakai `var()`

### `assets/css/style.css`

| Variable | Catatan |
|---|---|
| `--color-red` | Tidak dipanggil via `var()` di CSS mana pun |
| `--color-gold` | Tidak dipanggil via `var()` di CSS mana pun |
| `--accent-soft` | Tidak dipanggil via `var()` di CSS mana pun |
| `--status-error` | Tidak dipanggil via `var()` di CSS mana pun |
| `--shadow-l` | Tidak dipanggil via `var()` di CSS mana pun |
| `--bg-gradient-soft` | Tidak dipanggil via `var()` di CSS mana pun |
| `--scrim-gradient` | Tidak dipanggil via `var()` di CSS mana pun |
| `--radius-l` | Tidak dipanggil via `var()` di CSS mana pun |

### `assets/css/shared.css`

| Variable | Catatan |
|---|---|
| `--color-accent` | Tidak dipanggil via `var()` di CSS mana pun |
| `--radius-sm` | Tidak dipanggil via `var()` di CSS mana pun |
| `--radius-md` | Tidak dipanggil via `var()` di CSS mana pun |
| `--radius-lg` | Tidak dipanggil via `var()` di CSS mana pun |
| `--space-1` | Tidak dipanggil via `var()` di CSS mana pun |
| `--space-2` | Tidak dipanggil via `var()` di CSS mana pun |
| `--space-3` | Tidak dipanggil via `var()` di CSS mana pun |
| `--space-5` | Tidak dipanggil via `var()` di CSS mana pun |
| `--shadow-1` | Tidak dipanggil via `var()` di CSS mana pun |

### `assets/css/about.css`

| Variable | Catatan |
|---|---|
| `--about-accent-gradient` | Tidak dipanggil via `var()` di CSS mana pun |

---

## 3. UNDEFINED CLASS — Dipakai di HTML tapi Tidak Didefinisikan di CSS Mana Pun

| Class | File HTML | Baris |
|---|---|---|
| `.hidden` | `apps/uts-frontend/about.html` | 19 |
| `.hidden` | `apps/uts-frontend/services.html` | 27 |
| `.list` | `apps/uts-frontend/index.html` | 42 |

---

## 4. FILE CLEAN (Semua Class Terpakai)

| File | Status |
|---|---|
| `assets/css/style.css` | ✅ 2 unused class + 7 unused variable |
| `assets/css/shared.css` | ✅ 4 unused class + 9 unused variable |
| `assets/css/portfolio.css` | ✅ **Bersih total** |
| `assets/css/about.css` | ✅ **Bersih total** (1 unused variable) |
| `apps/latihan-2/style.css` | ✅ **Bersih total** |
| `apps/uts-frontend/css/style.css` | ✅ **Bersih total** |
| `apps/asn-frontend/style.css` | ✅ **Bersih total** |
| `apps/latihanjs/style.css` | ✅ **Bersih total** |

---

## 5. Priority untuk Refactor CSS

| Priority | Action | File |
|---|---|---|
| P1 | Hapus | `assets/css/archive.css` (entire file) |
| P1 | Hapus | `apps/uts-frontend/css/about.css` (entire file) |
| P1 | Hapus | `apps/uts-frontend/css/services.css` (entire file) |
| P1 | Hapus class | `.animate-search-fade`, `.min-h-45vh` dari `style.css` |
| P1 | Hapus class | `.grid-2`, `.text-muted`, `.center`, `.mb-4` dari `shared.css` |
| P2 | Hapus variable | 7 variable unreferenced dari `style.css` |
| P2 | Hapus variable | 9 variable unreferenced dari `shared.css` |
| P2 | Hapus variable | `--about-accent-gradient` dari `about.css` |
| P3 | Tambah definisi | `.hidden` dan `.list` jika diperlukan di UTS |

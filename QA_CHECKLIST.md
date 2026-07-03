# QA Checklist — Manual Testing

> Daftar periksa untuk testing manual setelah refactor. Karena tidak ada automated test, semua harus dicek satu per satu di browser.

---

## Cara Pakai

1. Buka setiap halaman di browser (local atau GitHub Pages)
2. Centang setiap item yang lolos
3. Catat bug yang ditemukan di kolom **Catatan**

---

## A. Dashboard Utama (`index.html`)

### A.1 Render

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Hero section muncul dengan benar (title, deskripsi) | ☐ | |
| 2 | Semua 8 project card tampil di grid | ☐ | |
| 3 | Gambar project loading dengan benar | ☐ | |
| 4 | Status badge (Completed/On Progress) muncul dengan warna sesuai | ☐ | |
| 5 | Tag badges muncul di setiap card | ☐ | |
| 6 | Link "Buka Proyek" mengarah ke URL yang benar | ☐ | |
| 7 | Footer muncul di bottom halaman | ☐ | |

### A.2 Search

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Ketik "Latihan" → hanya card Latihan yang muncul | ☐ | |
| 2 | Ketik "UTS" → hanya card UTS yang muncul | ☐ | |
| 3 | Ketik teks tidak ada → empty state "Proyek tidak ditemukan" | ☐ | |
| 4 | Hapus isian search → semua card kembali | ☐ | |
| 5 | Search case-insensitive ("latihan" = "Latihan") | ☐ | |

### A.3 Sort

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Default "Newest" → card termuda di atas | ☐ | |
| 2 | Ganti ke "Oldest" → card tertua di atas | ☐ | |
| 3 | Sort berfungsi bersamaan dengan search filter | ☐ | |

### A.4 Layout Toggle

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Tombol "Grid" aktif secara default | ☐ | |
| 2 | Klik "List" → tampilan berubah ke list (tanpa gambar) | ☐ | |
| 3 | Klik "Grid" → kembali ke grid | ☐ | |
| 4 | Refresh halaman → layout terakhir tersimpan (localStorage) | ☐ | |

### A.5 Responsive

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Tampilan OK di viewport < 600px (mobile) | ☐ | |
| 2 | Tampilan OK di viewport 768px | ☐ | |
| 3 | Tampilan OK di viewport > 1024px (desktop) | ☐ | |
| 4 | Navbar avatar muncul di mobile, hilang di desktop | ☐ | |

### A.6 Dark Mode

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Ganti system theme ke dark → tampilan berubah | ☐ | |
| 2 | Semua teks terbaca di dark mode | ☐ | |
| 3 | Card dan border terlihat jelas di dark mode | ☐ | |

---

## B. Portfolio Site (`apps/main/`)

### B.1 Home (`apps/main/index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Hero section dengan gradient text muncul | ☐ | |
| 2 | Navigasi (Home, Portfolio, About, Contact) berfungsi | ☐ | |
| 3 | Tombol "Explore Portfolio" → `/portfolio/` | ☐ | |
| 4 | Tombol "About Me" → `/about/` | ☐ | |
| 5 | Google Analytics terload (cek Network tab) | ☐ | |
| 6 | Footer muncul | ☐ | |

### B.2 Portfolio (`apps/main/portfolio/index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Profile section dengan foto muncul | ☐ | |
| 2 | Tech specs (skill tags) muncul | ☐ | |
| 3 | Project list (HargaAI, HoaxDetect, dll) muncul | ☐ | |
| 4 | Gallery scroll horizontal berfungsi | ☐ | |
| 5 | Masing-masing gallery card link ke URL yang benar | ☐ | |
| 6 | Contact form muncul (name, email, message) | ☐ | |
| 7 | Social links (GitHub, Email) berfungsi | ☐ | |

### B.3 About (`apps/main/about/index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Avatar + status dot muncul | ☐ | |
| 2 | Bio text (3 paragraf) muncul | ☐ | |
| 3 | Highlight cards (Active Learner, Full-Stack, Clean Code) | ☐ | |
| 4 | Info card (The Journey, Education) muncul | ☐ | |
| 5 | Design philosophy list muncul | ☐ | |

---

## C. UTS Frontend — FathurNEWS (`apps/uts-frontend/`)

### C.1 Home (`index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Navbar (logo + links) muncul | ☐ | |
| 2 | Headline article (gambar + overlay) muncul | ☐ | |
| 3 | "Paling Dicari" sidebar — 3 item trending | ☐ | |
| 4 | "Berita Terbaru" grid — semua news card | ☐ | |
| 5 | Klik card → buka URL di tab baru (`_blank`) | ☐ | |
| 6 | Gambar news loading dengan benar | ☐ | |

### C.2 About (`about.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Halaman tidak error (JS module jalan) | ☐ | |
| 2 | Konten about muncul | ☐ | |

### C.3 Services (`services.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Halaman tidak error (JS module jalan) | ☐ | |
| 2 | Konten services muncul | ☐ | |

---

## D. LatihanJS OOP (`apps/latihanjs/`)

### D.1 OOP App (`index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Header navigasi muncul | ☐ | |
| 2 | Data mahasiswa (Budi) muncul: Nama, Umur, NIM, Jurusan | ☐ | |
| 3 | Saldo rekening Budi tampil (Rp 1.500.000) | ☐ | |
| 4 | Tombol navigasi (Home / Cart / Class) berfungsi | ☐ | |

### D.2 Cart App (`class.html` atau via navigasi)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Daftar produk (Kemeja, Celana, Topi) tampil | ☐ | |
| 2 | Tombol "Tambahkan" untuk setiap produk | ☐ | |
| 3 | Klik "Tambahkan" → item masuk ke keranjang | ☐ | |
| 4 | Tombol +/- di keranjang mengubah quantity | ☐ | |
| 5 | Total harga berubah sesuai quantity | ☐ | |
| 6 | Keranjang kosong → tampilkan "Belum ada item" | ☐ | |

### D.3 Konversi Suhu (`konversisuhu.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Form input suhu muncul | ☐ | |
| 2 | Hasil konversi tampil dengan benar | ☐ | |

---

## E. LatihanJS Functional Cart (`apps/latihanjs/functional/index.html`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Header dengan cart count (0) muncul | ☐ | |
| 2 | Product list (Kemeja, Celana, Topi) tampil | ☐ | |
| 3 | Tombol "Add to cart" berfungsi | ☐ | |
| 4 | Cart count di header bertambah | ☐ | |
| 5 | Cart drawer/list menampilkan item | ☐ | |
| 6 | Total harga kalkulasi benar | ☐ | |

---

## F. PHP Tasks

### F.1 Login Logic (`apps/php/tugas/login-logic/index.php`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Form login tampil | ☐ | |
| 2 | Submit kosong → error "harus diisi" | ☐ | |
| 3 | admin / 12345 → sukses "Login berhasil" | ☐ | |
| 4 | Kombinasi lain → error "salah" | ☐ | |
| 5 | Checkbox "Remember me" berfungsi | ☐ | |

### F.2 QR Code (`apps/php/tugas/studi-kasus/`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Form input (Nama, NIM, Prodi) tampil | ☐ | |
| 2 | Submit → halaman hasil dengan QR Code | ☐ | |
| 3 | QR Code dapat di-scan (cek dengan HP) | ☐ | |
| 4 | Data di QR sesuai input | ☐ | |

### F.3 Kasir KFC (`apps/php/tugas/tugas-function/index.php`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Form menu (5 pilihan) tampil | ☐ | |
| 2 | Pilih menu + jumlah + submit → struk muncul | ☐ | |
| 3 | Diskon member 10% aktif jika checkbox checked | ☐ | |
| 4 | PPN 11% terhitung dengan benar | ☐ | |
| 5 | Total akhir = (subtotal - diskon) + PPN | ☐ | |

---

## G. Latihan HTML/CSS

### G.1 Latihan 1 (`apps/latihan-1/`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Halaman index, form, list, nav semua bisa diakses | ☐ | |

### G.2 Latihan 2 — Car Rental (`apps/latihan-2/`)

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Halaman utama dengan daftar mobil tampil | ☐ | |
| 2 | Search/filter berfungsi jika ada | ☐ | |

---

## H. Regression — Global

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Tidak ada error di Console browser | ☐ | |
| 2 | Tidak ada 404 untuk asset (gambar, CSS, JS) | ☐ | |
| 3 | Semua relative path berfungsi dari root | ☐ | |
| 4 | Tidak ada perubahan visual yang tidak diinginkan | ☐ | |
| 5 | Performance: halaman dashboard load < 3 detik | ☐ | |

---

## Ringkasan

| Area | Total Item | Lolos | Gagal | Skipped |
|---|---|---|---|---|
| A. Dashboard | 28 | ☐ | ☐ | ☐ |
| B. Portfolio | 16 | ☐ | ☐ | ☐ |
| C. UTS Frontend | 10 | ☐ | ☐ | ☐ |
| D. LatihanJS OOP | 12 | ☐ | ☐ | ☐ |
| E. LatihanJS Functional | 6 | ☐ | ☐ | ☐ |
| F. PHP Tasks | 12 | ☐ | ☐ | ☐ |
| G. Latihan HTML/CSS | 2 | ☐ | ☐ | ☐ |
| H. Global | 5 | ☐ | ☐ | ☐ |
| **Total** | **91** | ☐ | ☐ | ☐ |

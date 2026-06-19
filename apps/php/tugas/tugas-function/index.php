<?php
require_once 'function.php';

$daftarMenu = [

];

$data = null;
$hasil = null;
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Tugas Function</title>

  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 flex flex-col min-h-dvh antialiased text-gray-800">
  <header class="border-b border-gray-300/50 bg-white">
    <div class="flex items-center justify-between max-w-5xl mx-auto px-5 py-2">
      <div>
        <strong>Aplikasi Kasir KFC.</strong>
      </div>
      <p class="text-sm font-medium">Tugas Function PHP</p>
    </div>
  </header>

  <main class="grow">
    <section class="max-w-5xl mx-auto px-5 py-10">
      <div class="flex flex-col justify-center gap-5 md:flex-row">
        <div class="w-full bg-white rounded-xl overflow-hidden shadow">
          <div class="bg-red-600 text-gray-50 p-5 text-center">
            <h1 class="italic font-black text-3xl">KFC ORDER</h1>
            <p class="font-medium">Jagonya Ayam!</p>
          </div>
          <form method="post" class="p-4 space-y-4">
            <div class="flex flex-col gap-2">
              <label for="nama" class="font-semibold">Nama Pelanggan:</label>
              <input type="text" id="nama" name="nama" class="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 placeholder:text-sm"
                placeholder="Masukkan nama anda..." required>
            </div>

            <div class="flex flex-col gap-2">
              <label for="menu" class="font-semibold">Pilih Menu:</label>
              <select class="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none"
                name="menu" id="menu" required>
                <option value="" disabled selected>Pilih Menu</option>
                <option value="menu1">Menu 1</option>
                <option value="menu2">Menu 2</option>
                <option value="menu3">Menu 3</option>
              </select>
            </div>

            <div class="flex flex-col gap-2">
              <label for="jumlah" class="font-semibold">Jumlah Porsi:</label>
              <input type="number" name="jumlah" id="jumlah" min="1" max="10" value="1"
                class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
            </div>

            <div class="border border-slate-200/50 rounded-md flex items-center gap-2 p-4 bg-slate-100">
              <input type="checkbox" name="member" id="member"
                class="size-5 cursor-pointer">
              <label for="member" class="font-semibold cursor-pointer">Kartu Member KFC (Diskon 10%)</label>
            </div>

            <button type="submit" class="bg-red-500 text-white font-bold px-5 py-3 w-full rounded-md text-sm">HITUNG PESANAN</button>
          </form>
        </div>

        <div class="w-full min-h-64 bg-white rounded-xl overflow-hidden border-t-8 border-red-500 p-4 flex flex-col shadow">
          <h2 class="text-2xl font-bold py-3 border-b-2 border-dashed">Struk Pembayaran</h2>

          <?php if (is_null($data)): ?>
            <div class="grow flex items-center justify-center flex-col text-gray-400">
              <p>Belum ada pesanan.</p>
              <P>Silahkan mengisi form.</P>
            </div>
          <?php else: ?>
            <div class="grow mt-3 font-mono text-sm space-y-3">
              <div class="flex justify-between">
                <span>Nama Pelanggan:</span>
                <span class="font-bold">
                  <!-- nama pelanggan -->
                </span>
              </div>
              <div class="flex justify-between">
                <span>Status Member:</span>
                <span class="font-bold <?= $data['is_member'] ? 'text-green-600' : '' ?>">
                  <!-- Status member -->
                </span>
              </div>

              <hr class="border-dashed">

              <div class="flex justify-between">
                <span>Pesanan:</span>
                <span class="font-bold">
                  <!-- Pesanan -->
                </span>
              </div>

              <div class="flex justify-between">
                <span>Harga Satuan:</span>
                <span>
                  <!-- Harga satuan -->
                </span>
              </div>

              <div class="flex justify-between">
                <span>Jumlah:</span>
                <span>
                  <!-- Jumlah -->
                </span>
              </div>

              <div class="flex justify-between font-bold">
                <span>Subtotal:</span>
                <span>
                  <!-- Subtotal -->
                </span>
              </div>

              <hr class="border-dashed">

              <div class="flex justify-between text-green-600">
                <span>Diskon Member(10%):</span>
                <span>
                  - Rp <!-- Diskon -->
                </span>
              </div>

              <div class="flex justify-between text-red-600">
                <span>PPN (11%):</span>
                <span>
                  + Rp <!-- Diskon -->
                </span>
              </div>

              <hr class="border-2 border-gray-600">

              <div class="flex justify-between text-lg font-bold text-red-600 pt-3">
                <span>TOTAL:</span>
                <span>
                  <!-- Total -->
                </span>
              </div>

            </div>
          <?php endif; ?>

        </div>
      </div>
    </section>
  </main>

  <footer class="bg-white border-t border-gray-300/50">
    <div class="max-w-5xl mx-auto px-5 py-2 flex justify-between">
      <small>Muhammad Fathurrahman • 241110109</small>
      <small>Praktikum Pemrograman Web</small>
    </div>
  </footer>
</body>

</html>
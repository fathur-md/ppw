<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code Mahasiswa</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 text-gray-800 antialiased flex flex-col items-center min-h-dvh py-10 px-5">
  <div class="rounded-xl bg-white border-2 border-gray-200/60 p-4 w-full max-w-md">
    <h2 class="text-2xl font-semibold text-blue-400">Form Data Mahasiswa</h2>
    <br>
    <form action="./generate.php" method="post" class="flex flex-col gap-2">
      <label class="font-medium" for="nama">Nama:</label>
      <input type="text" name="nama" id="nama" placeholder="Masukkan nama anda..." required
        class="rounded-md border p-2">
      <label class="font-medium mt-4" for="nim">NIM:</label>
      <input type="text" name="nim" id="nim" inputmode="numeric" pattern="[0-9]{1,9}" maxlength="9" placeholder="Contoh: 123456789" required
        class="rounded-md border p-2">

      <label class="font-medium mt-4" for="prodi">Prodi:</label>
      <select name="prodi" id="prodi" required class="appearance-none bg-gray-100 rounded-md invalid:text-gray-400 text-sm font-medium p-2 cursor-pointer">
        <option value="" disabled selected>- Pilih Prodi -</option>
        <option value="Informatika">Informatika</option>
        <option value="Sistem Informasi">Sistem Informasi</option>
      </select>

      <button class="bg-blue-400 text-white font-semibold p-2 rounded-md mt-4" type="submit">Generate QR Code</button>
    </form>
  </div>
</body>

</html>
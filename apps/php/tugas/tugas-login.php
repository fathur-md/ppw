<?php

$remember = false;
$username = '';
$password = '';
$error = '';
$success = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'] ?? '';
  $password = $_POST['password'] ?? '';
  $remember = isset($_POST['remember-me']);

  // =============================================
  // TUGAS 1: Tambahkan validasi di sini
  // - Jika username atau password kosong, tampilkan pesan error
  if (empty($username) || empty($password)) {
    $error = "Username atau password harus diisi!";
  }
  // - Jika username = "admin" dan password = "12345", tampilkan pesan sukses
  elseif ($username === "admin" && $password === "12345") {
    $success = "Login berhasil";
  }
  // - Jika salah, tampilkan pesan "Username atau password salah!"
  else {
    $error = "Username atau password salah!";
  }
  // =============================================
}

?>
<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tugas Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <?php if ($success): ?>
    <div class="absolute right-4 top-3">
      <p class="bg-green-50 text-green-800 px-6 py-2 rounded-lg shadow shadow-green-800/20"><?= htmlspecialchars($success) ?></p>
    </div>
  <?php endif; ?>
  <div class="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
    <h1 class="text-xl font-semibold text-center mb-6">Login</h1>

    <?php if ($error): ?>
      <p class="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
        <?= htmlspecialchars($error) ?>
      </p>
    <?php endif; ?>


    <form method="POST">
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Username</label>
        <input
          type="text"
          name="username"
          value="<?= htmlspecialchars($username) ?>"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan username">
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Masukkan password">
      </div>

      <!-- ============================================= -->
      <!-- TUGAS 2: Tambahkan checkbox "Remember me"    -->
      <!-- di antara password dan tombol login di bawah  -->
      <label for="remember-me" class="flex w-full gap-1.5 mb-4 cursor-pointer select-none">
        <input type="checkbox" name="remember-me" id="remember-me">
        <span class="text-sm text-gray-600">Remember me</span>
      </label>
      <!-- ============================================= -->

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>
    </form>
  </div>

</body>

</html>
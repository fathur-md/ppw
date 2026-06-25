<?php
session_start();

$error = $_SESSION['error'] ?? null;
unset($_SESSION['error']);
?>

<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen bg-gray-100 flex items-center justify-center">

  <div class="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
      Login
    </h1>

    <?php if ($error): ?>
      <div class="mb-4 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-red-700">
        <?= htmlspecialchars($error) ?>
      </div>
    <?php endif; ?>

    <form action="actions/login.php" method="POST" class="space-y-4">

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Masukkan username"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Masukkan password"
          required
          class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Login
      </button>

    </form>
  </div>

</body>

</html>
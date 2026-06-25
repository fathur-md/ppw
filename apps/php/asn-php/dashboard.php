<?php

session_start();

if (!isset($_SESSION['user'])) {
  header('Location: index.php');
  exit;
}

require_once 'Database.php';

$products = Database::getProducts();

$edit = null;

if (isset($_GET['id'])) {
  $edit = Database::getProductById($_GET['id']);
}

require_once 'Database.php';

$products = Database::getProducts();

$edit = null;

if (isset($_GET['id'])) {
  $edit = Database::getProductById($_GET['id']);
}

?>
<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Toko Souvenir</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen">

  <div class="max-w-6xl mx-auto p-6">

    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">
          Dashboard Toko Souvenir
        </h1>
      </div>

      <a
        href="actions/logout.php"
        class="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg">
        Logout
      </a>
    </div>

    <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800">
        <?= $edit ? 'Edit Produk' : 'Tambah Produk' ?>
      </h2>

      <form
        action="<?= $edit ? 'actions/update.php' : 'actions/create.php' ?>"
        method="POST"
        class="grid md:grid-cols-3 gap-4">

        <?php if ($edit): ?>
          <input
            type="hidden"
            name="id"
            value="<?= $edit['id'] ?>">
        <?php endif; ?>

        <input
          type="text"
          name="name"
          placeholder="Nama Produk"
          value="<?= htmlspecialchars($edit['name'] ?? '') ?>"
          required
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <input
          type="number"
          name="price"
          placeholder="Harga"
          value="<?= htmlspecialchars($edit['price'] ?? '') ?>"
          required
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value="<?= htmlspecialchars($edit['stock'] ?? '') ?>"
          required
          class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

        <div class="md:col-span-3">
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
            <?= $edit ? 'Update Produk' : 'Tambah Produk' ?>
          </button>

          <?php if ($edit): ?>
            <a
              href="dashboard.php"
              class="ml-2 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition">
              Batal
            </a>
          <?php endif; ?>
        </div>

      </form>
    </div>

    <div class="bg-white rounded-xl shadow-md overflow-hidden">

      <div class="px-6 py-4 border-b">
        <h2 class="text-xl font-semibold text-gray-800">
          Daftar Produk
        </h2>
      </div>

      <div class="overflow-x-auto">

        <table class="w-full">

          <thead class="bg-gray-50">
            <tr>

              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Nama Produk
              </th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Harga
              </th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Stok
              </th>
              <th class="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">

            <?php if (!empty($products)): ?>
              <?php foreach ($products as $p): ?>

                <tr class="hover:bg-gray-50">



                  <td class="px-6 py-4 font-medium text-gray-800">
                    <?= htmlspecialchars($p['name']) ?>
                  </td>

                  <td class="px-6 py-4">
                    Rp <?= number_format($p['price'], 0, ',', '.') ?>
                  </td>

                  <td class="px-6 py-4">
                    <?= $p['stock'] ?>
                  </td>

                  <td class="px-6 py-4 text-center">

                    <a
                      href="?id=<?= $p['id'] ?>"
                      class="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm">
                      Edit
                    </a>

                    <a
                      href="actions/delete.php?id=<?= $p['id'] ?>"
                      onclick="return confirm('Yakin ingin menghapus produk ini?')"
                      class="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm ml-2">
                      Hapus
                    </a>

                  </td>

                </tr>

              <?php endforeach; ?>

            <?php else: ?>

              <tr>
                <td colspan="5" class="text-center py-8 text-gray-500">
                  Belum ada produk.
                </td>
              </tr>

            <?php endif; ?>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</body>

</html>
<?php

require_once __DIR__ . "/Database.php";
require_once __DIR__ . "/Controller.php";

$db = new Database();
$conn = $db->connect();

$controller = new Controller($conn);
$res = $controller->index();

$data = $res['data'];
$error = $res['error'];
$success = $res['success'];

$editId = $_GET['edit'] ?? null;
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASN Backend</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style type="text/tailwindcss">
    @layer components {
      /* Replaced Tailwind @apply rules with equivalent plain CSS to avoid unknown at-rule errors */
      p {
        color: #4B5563; /* text-gray-600 */
      }
      button {
        padding-left: 1.5rem; /* px-6 */
        padding-right: 1.5rem;
        padding-top: 0.5rem; /* py-2 */
        padding-bottom: 0.5rem;
        border-radius: 0.375rem; /* rounded-md */
        font-weight: 500; /* font-medium */
        transition: all 0.2s ease;
      }
      button:active {
        transform: scale(.95);
      }
      input, select, textarea {
        padding: 0.5rem 0.75rem; /* py-2 px-3 */
        border: 1px solid #D1D5DB; /* border-gray-300 */
        border-radius: 0.375rem; /* rounded-md */
        outline: none;
        width: 100%;
      }
      input:focus, select:focus, textarea:focus {
        box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25); /* focus:ring-2 focus:ring-green-400 */
      }
    }
  </style>
</head>

<body class="flex flex-col bg-zinc-100 text-gray-800 min-h-dvh antialiased">
  <header class="bg-gradient-to-b from-zinc-100 to-white sticky top-0 z-50 border-zinc-200 border-b">
    <nav class="flex justify-between items-center mx-auto px-4 py-2 max-w-6xl">
      <a href="./">
        <strong>This is logo</strong>
      </a>
      <div class="flex items-center gap-4 font-medium text-sm">
        <a href="#" class="">Placeholder 1</a>
        <a href="#" class="">Placeholder 2</a>
        <a href="#" class="">Placeholder 3</a>
      </div>
    </nav>
  </header>

  <main class="grow">
    <section class="py-10">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <div class="flex flex-col gap-2">
          <p class="font-medium">Hero subtitle</p>
          <h1 class="text-3xl md:text-5xl font-semibold">Hero Title</h1>
          <p class="max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum fuga dolor aperiam quo repellat dolore nulla nostrum! Aspernatur quisquam praesentium similique vitae atque reiciendis, eius eum natus in possimus.
          </p>
        </div>
      </div>
    </section>
    <hr class="border-4 border-white">
    <section class="mx-auto py-10 max-w-6xl">
      <div class="max-w-3xl mx-auto rounded-xl px-4">
        <h2 class="font-semibold text-2xl text-gray-700">Read Table</h2>
        <div class="flex flex-col items-end mt-4">
          <?php if (!$success): ?>
            <div class="p-8 bg-red-50 border rounded-xl w-full flex items-center justify-center">
              <p class="text-red-500">
                <?= htmlspecialchars($error) ?>
              </p>
              <br>
            </div>
          <?php endif; ?>

          <?php if ($success && empty($data)): ?>
            <div class="p-8 border rounded-xl w-full bg-zinc-50 flex items-center justify-center">
              <p class="text-gray-500">Belum ada data di table...</p>
              <br>
            </div>
          <?php endif; ?>

          <?php if ($success && !empty($data)): ?>
            <div data-component="table" class="relative overflow-x-auto rounded-xl border border-neutral-200 bg-slate-50 w-full">
              <table class="w-full text-left text-sm">
                <thead class="rounded-xl border-b border-b-neutral-200 bg-gray-100">
                  <tr>
                    <th class="px-6 py-3 font-semibold">Nama</th>
                    <th class="px-6 py-3 font-semibold">NIM</th>
                    <th class="px-6 py-3 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($data as $row): ?>
                    <tr class="border-b border-neutral-200 bg-slate-50">
                      <?php if ($editId == $row['id']): ?>
                        <form action="actions/update.php" method="post">
                          <td class="px-4 py-2">
                            <input class="w-auto p-2 pr-0" type="text" name="nama" value="<?= $row['nama'] ?>" autofocus>
                          </td>

                          <td class="px-2 py-2">
                            <input class="w-fit p-2" type="text" name="nim" value="<?= $row['nim'] ?>">
                          </td>

                          <td class="px-6 py-4 align-middle">
                            <div class="flex items-center justify-end gap-2 flex-wrap">
                              <input type="hidden" name="id" value="<?= $row['id'] ?>">
                              <button class="text-green-500 border border-green-500 w-20 text-center py-1 px-0 rounded-full" type="submit">Update</button>
                              <a class="bg-zinc-50 border border-zinc-400 rounded-full font-medium w-20 text-center py-1 px-0" href=" index.php">Cancel</a>
                            </div>
                          </td>
                        </form>
                      <?php else: ?>
                        <td class="px-6 py-4 font-medium"><?= htmlspecialchars($row["nama"]) ?></td>
                        <td class="px-6 py-4 font-medium"><?= htmlspecialchars($row["nim"]) ?></td>
                        <td class="align-middle py-4 px-6">
                          <div class="flex items-center justify-end gap-2 flex-wrap">
                            <a
                              href="actions/delete.php?id=<?= $row['id'] ?>"
                              class="bg-red-400 text-white rounded-full font-medium w-20 text-center py-1 px-0">
                              Delete
                            </a>
                            <a
                              href="?edit=<?= $row["id"] ?>"
                              class="bg-blue-500 text-white w-20 text-center py-1 px-0 rounded-full">
                              Edit
                            </a>
                          </div>
                        </td>
                      <?php endif; ?>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          <?php endif; ?>
          <button type="button" command="show-modal" commandfor="form-modal" class="bg-green-500 mt-4 w-[170px] rounded-full text-white">Create</button>
        </div>
      </div>
    </section>
  </main>

  <dialog id="form-modal" class="shadow p-2 rounded-xl w-11/12 max-w-md backdrop:backdrop-blur-sm backdrop:bg-black/30 mt-24 mb-auto" closedby="any">
    <form action="actions/create.php" method="post" class="p-4 flex flex-col">
      <h3 class="mb-4 font-semibold text-lg">Isi table</h3>
      <div class="mb-4">
        <label for="nama" class="block mb-1">Nama:</label>
        <input type="text" id="nama" name="nama" required>
      </div>
      <div class="mb-4">
        <label for="nim" class="block mb-1">NIM:</label>
        <input type="text" id="nim" name="nim" required>
      </div>
      <br>
      <div class="grid grid-cols-2 gap-2">
        <button type="submit" class="bg-green-500 text-white">Submit</button>
        <button type="button" command="close" commandfor="form-modal" class="bg-gray-300">Cancel</button>
      </div>
    </form>
  </dialog>

  <footer class="bg-gradient-to-t from-zinc-100 to-white border-zinc-200 border-t">
    <div class="mx-auto px-4 py-2 max-w-6xl text-gray-500">
      <small>Muhammad Fathurrahman • 241110109 | ASN Backend PPW</small>
    </div>
  </footer>


  <script>
    // Auto close edit form saat refresh
    if (window.location.search.includes('edit=')) {
      const url = new URL(window.location);
      url.searchParams.delete('edit');
      window.history.replaceState({}, document.title, url.pathname);
    }
  </script>
</body>

</html>
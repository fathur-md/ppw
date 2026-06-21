<?php

require_once __DIR__ . "/../Database.php";
require_once __DIR__ . "/../Controller.php";

$db = new Database();
$conn = $db->connect();
$controller = new Controller($conn);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $id = (int) ($_POST['id'] ?? 0);
  $nama = trim($_POST['nama'] ?? "");
  $nim = trim($_POST['nim'] ?? "");

  $old = $controller->find($id);

  if ($old && ($old['nama'] !== $nama || $old['nim'] !== $nim)) {
    $controller->update($id, $nama, $nim);
  }
}

header("Location: ../index.php");
exit;

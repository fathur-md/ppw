<?php

require_once __DIR__ . "/../Database.php";
require_once __DIR__ . "/../Controller.php";

$db = new Database();
$conn = $db->connect();
$controller = new Controller($conn);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nama = trim($_POST["nama"] ?? "");
  $nim  = trim($_POST["nim"] ?? "");

  if ($nama && $nim) {
    $controller->create($nama, $nim);
  }
}

header("Location: ../index.php");
exit;

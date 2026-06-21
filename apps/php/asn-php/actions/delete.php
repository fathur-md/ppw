<?php

require_once __DIR__ . "/../Database.php";
require_once __DIR__ . "/../Controller.php";

$db = new Database();
$conn = $db->connect();
$controller = new Controller($conn);

$id = (int) ($_GET['id'] ?? 0);

if ($id > 0) {
  $controller->delete($id);
}

header("Location: ../index.php");
exit;

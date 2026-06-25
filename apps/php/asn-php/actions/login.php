<?php

session_start();

require_once '../Database.php';

$user = Database::login(
  $_POST['username'],
  $_POST['password']
);

if ($user) {
  $_SESSION['user'] = $user['username'];

  header('Location: ../dashboard.php');
  exit;
}

$_SESSION['error'] = 'Username atau password salah';

header('Location: ../index.php');
exit;

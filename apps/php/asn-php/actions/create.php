<?php

require_once '../Database.php';

Database::createProduct(
  $_POST['name'],
  $_POST['price'],
  $_POST['stock']
);

header('Location: ../dashboard.php');
exit;

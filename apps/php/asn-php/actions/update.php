<?php

require_once '../Database.php';

Database::updateProduct(
  $_POST['id'],
  $_POST['name'],
  $_POST['price'],
  $_POST['stock']
);

header('Location: ../dashboard.php');
exit;

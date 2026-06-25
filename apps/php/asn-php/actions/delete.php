<?php

require_once '../Database.php';

Database::deleteProduct($_GET['id']);

header('Location: ../dashboard.php');
exit;

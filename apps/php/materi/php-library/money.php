<?php
require __DIR__ . '/../../vendor/autoload.php';

use Money\Money;
use Money\Currency;
?>

<!DOCTYPE html>
<html>

<head>
  <title>Konversi Mata Uang USD ke IDR</title>
</head>

<body>
  <h2>Konversi Mata Uang USD ke IDR</h2>

  <form method="post">
    <label>Jumlah dalam USD:</label>
    <input type="number" name="jumlah" step="0.01" required>
    <br><br>
    <input type="submit" value="Konversi">
  </form>

  <?php
  if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $jumlahUSD = floatval($_POST['jumlah']);
    $jumlahCent = intval($jumlahUSD * 100);
    $uangUSD = new Money($jumlahCent, new Currency('USD'));

    $kurs = 15000;

    $jumlahIDR = ($uangUSD->getAmount() * $kurs) / 100;

    echo "<h3>Hasil Konversi:</h3>";
    echo "<p>USD {$jumlahUSD} = <strong>RP " . number_format($jumlahIDR, 2, ',', '.') . "</strong></p>";
  }
  ?>
</body>

</html>
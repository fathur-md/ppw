<?php
// Memanggil autoloader Composer agar library dapat digunakan
require __DIR__ . '/../../vendor/autoload.php';

use Endroid\QrCode\QrCode;
use Endroid\QrCode\Encoding\Encoding;
use Endroid\QrCode\Writer\PngWriter;

// Mengambil data yang dikirim dari form
$nama = $_POST['nama'] ?? "";
$nim = $_POST['nim'] ?? "";
$prodi = $_POST['prodi'] ?? "";

// Menggabungkan data mahasiswa menjadi satu string
$data = "$nama-$nim-$prodi";

// Membuat objek QR Code
$qrCode = new QrCode(
  data: $data,
  encoding: new Encoding('UTF-8'),
  size: 300,
  margin: 10
);

// Membuat gambar QR Code format PNG
$writter = new PngWriter();
$result = $writter->write($qrCode);
?>

<!DOCTYPE html>
<html>

<head>
  <title>QR Code Mahasiswa</title>
</head>

<body>
  <h2>Hasil QR Code</h2>
  <p>Nama: <?= $nama ?></p>
  <p>NIM: <?= $nim ?></p>
  <p>Prodi: <?= $prodi ?></p>
  <!-- Menampilkan gambar QR Code yang telah dibuat -->
  <img src="<?= $result->getDataUri() ?>" alt="QR Code">
</body>

</html>
<?php
require_once __DIR__ . '/../../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nama = htmlspecialchars($_POST['nama']);
  $nim = htmlspecialchars($_POST['nim']);

  $pdf = new TCPDF();
  $pdf->setPrintHeader(false);
  $pdf->setPrintFooter(false);
  $pdf->setMargins(20, 20, 20);
  $pdf->AddPage();

  ob_start();
?>
  <h1 style="color: navy;">Laporan Praktikum</h1>
  <p>PDF ini dibuat menggunakan <strong>TCPDF</strong> berdasarkan input form.</p>
  <p><strong>Nama:</strong> <?= $nama ?></p>
  <p><strong>NIM:</strong> <?= $nim ?></p>
  <p><strong>Tanggal:</strong> <?= date('d-m-Y') ?></p>
<?php
  $html = ob_get_clean();
  $pdf->writeHTML($html, true, false, true, false, '');
  $pdf->Output("laporan_$nim.pdf", 'I');
  exit;
}
?>
<!DOCTYPE html>
<html>

<head>
  <title>Form Cetak PDF</title>
</head>

<body>
  <h2>Formulir Cetak PDF</h2>
  <form method="post">
    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>NIM:</label><br>
    <input type="text" name="nim" required><br><br>

    <button type="submit">Cetak PDF</button>
  </form>
</body>

</html>
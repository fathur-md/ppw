<?php
require __DIR__ . '/../../vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nama = $_POST['nama'];
  $nim = $_POST['nim'];

  $spreadsheet = new Spreadsheet();
  $sheet = $spreadsheet->getActiveSheet();
  $sheet->setCellValue('A1', 'Nama');
  $sheet->setCellValue('B1', 'NIM');
  $sheet->setCellValue('A2', $nama);
  $sheet->setCellValue('B2', $nim);

  header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  header('Content-Disposition: attachment;filename="data_mahasiswa.xlsx"');
  header('Cache-Control: max-age=0');

  $writter = new Xlsx($spreadsheet);
  $writter->save('php://output');
  exit;
}
?>

<!DOCTYPE html>
<html>

<head>
  <title>Form Ekspor ke Excel</title>
</head>

<body>
  <h2>Formulir Ekspor Data ke Excel</h2>
  <form method="post">
    <label>Nama:</label><br>
    <input type="text" name="nama" required><br><br>

    <label>NIM:</label><br>
    <input type="text" name="nim" required><br><br>

    <button type="submit">Ekspor ke Excel</button>
  </form>
</body>

</html>
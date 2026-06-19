<?php
// fungsi sederhana
function sapaPengguna(): void
{
  echo "Selamat datang di praktikum PHP function!<br>";
}

// sapaPengguna();

// fungsi dengan parameter dan return value
function hitungLuasPersegiPanjang(int $panjang, int $lebar): int
{
  $luas = $panjang * $lebar;
  return $luas;
}

// echo "Luas 5 x 3 = " . hitungLuasPersegiPanjang(5, 3) . "<br>";
// echo "Luas 10 x 8 = " . hitungLuasPersegiPanjang(10, 8) . "<br>";

// fungsi sebagai helper dalam app sederhana
function hitungDiskon(float $hargaAwal, float $persenDiskon): float
{
  $potongan = $hargaAwal * ($persenDiskon / 100);
  $hargaAkhir = $hargaAwal - $potongan;

  return $hargaAkhir;
}

$hargaSetelahDiskon = "";
if (isset($_POST['hitung'])) {
  $harga = $_POST['harga'];
  $diskon = $_POST['diskon'];

  $hargaSetelahDiskon = hitungDiskon($harga, $diskon);
}

?>

<!-- Form input harga dan diskon -->
<form method="post">
  <label>Harga Awal (Rp):</label>
  <input type="number" name="harga" required><br><br>

  <label>Diskon (%):</label>
  <input type="number" name="diskon" required><br><br>

  <button type="submit" name="hitung">Hitung Harga Setelah Diskon</button>
</form>

<?php
if ($hargaSetelahDiskon !== "") {
  echo "<h3>Harga Setelah Diskon: Rp " . number_format($hargaSetelahDiskon, 0, ',', '.') . "</h3>";
}
?>
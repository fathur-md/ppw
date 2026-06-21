<?php

/** 
 * Menghitung subtotal dari harga menu dan jumlah pesanan.
 * Menerima parameter harga dan jumlah bertipe int lalu hasil return juga bertipe int.
 */
function hitungSubtotal(int $harga, int $jumlah): int
{
  return $harga * $jumlah;
}

/**
 * Menghitung diskon member 10%.
 * Menerima subtotal bertipe int dan status member bertipe bool,
 * kemudian mengembalikan nilai diskon bertipe float
 */
function hitungDiskon(int $subtotal, bool $isMember): float
{
  return $isMember ? $subtotal * 0.10 : 0;
}

/**
 * Menghitung PPN 11% dari subtotal setelah diskon.
 * Menerima subtotal setelah diskon bertipe float 
 * dan mengembalikan nilai PPN
 */
function hitungPPN(float $subtotalSetelahDiskon): float
{
  return $subtotalSetelahDiskon * 0.11;
}

/**
 * Menghitung total yang harus dibayar.
 * Menerima subtotal, diskon, dan PPN bertipe float,
 * lalu mengembalikan total pembayaran bertipe float
 */
function hitungTotal(float $subtotal, float $diskon, float $ppn): float
{
  return ($subtotal - $diskon) + $ppn;
}

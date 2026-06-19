<?php

function hitungSubtotal(int $harga, int $jumlah): int
{
  return $harga * $jumlah;
}

function hitungDiskon(int $subtotal, bool $isMember): float
{
  return $isMember ? $subtotal * 0.10 : 0;
}

function hitungPPN(float $subtotalSetelahDiskon): float
{
  return $subtotalSetelahDiskon * 0.11;
}

function hitungTotal(float $subtotal, float $diskon, float $ppn): float
{
  return ($subtotal - $diskon) + $ppn;
}

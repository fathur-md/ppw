<?php

class Database
{
  private $host = "localhost";
  private $user = "root";
  private $pass = "";
  private $db   = "ppw_asn";

  public $conn;

  public function connect()
  {
    $this->conn = new mysqli(
      $this->host,
      $this->user,
      $this->pass,
      $this->db
    );

    if ($this->conn->connect_error) {
      die("Koneksi gagal: " . $this->conn->connect_error);
    }

    return $this->conn;
  }
}

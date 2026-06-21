<?php

class Model
{
  private $conn;
  private $table = "test";

  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function getAll()
  {
    try {
      $sql = "SELECT * FROM " . $this->table;
      $result = $this->conn->query($sql);
      if (!$result) return false;

      $data = [];
      while ($row = $result->fetch_assoc()) {
        $data[] = $row;
      }

      return $data;
    } catch (mysqli_sql_exception $e) {
      return false;
    }
  }

  public function create($nama, $nim)
  {
    $stmt = $this->conn->prepare(
      "INSERT INTO {$this->table} (nama, nim) VALUES (?, ?)"
    );

    if (!$stmt) return false;

    $stmt->bind_param("ss", $nama, $nim);
    return $stmt->execute();
  }

  public function update($id, $nama, $nim)
  {
    try {
      $stmt = $this->conn->prepare(
        "UPDATE {$this->table} SET nama = ?, nim = ? WHERE id = ?"
      );
      if (!$stmt) return false;

      $stmt->bind_param("ssi", $nama, $nim, $id);
      return $stmt->execute();
    } catch (mysqli_sql_exception $e) {
      return false;
    }
  }

  public function delete($id)
  {
    try {
      $stmt = $this->conn->prepare(
        "DELETE FROM {$this->table} WHERE id = ?"
      );

      $stmt->bind_param("i", $id);
      return $stmt->execute();
    } catch (mysqli_sql_exception $e) {
      return false;
    }
  }

  public function find($id)
  {
    try {
      $stmt = $this->conn->prepare(
        "SELECT * FROM {$this->table} WHERE id = ?"
      );
      $stmt->bind_param("i", $id);
      $stmt->execute();
      $result = $stmt->get_result();
      return $result->fetch_assoc();
    } catch (mysqli_sql_exception $e) {
      return false;
    }
  }
}

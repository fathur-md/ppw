<?php

require_once __DIR__ . '/Database.php';

class UserController
{
  private PDO $db;

  public function __construct()
  {
    $this->db = Database::getConnection();
  }

  public function login(string $username, string $password)
  {
    $stmt = $this->db->prepare(
      "SELECT * FROM users WHERE username = ? AND password = ?"
    );

    $stmt->execute([$username, $password]);

    return $stmt->fetch(PDO::FETCH_ASSOC);
  }
}

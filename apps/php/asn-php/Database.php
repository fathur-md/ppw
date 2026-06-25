<?php

class Database
{
  private static ?PDO $connection = null;

  public static function getConnection(): PDO
  {
    if (self::$connection === null) {
      self::$connection = new PDO(
        "mysql:host=localhost;dbname=ppw_asn;charset=utf8",
        "root",
        ""
      );

      self::$connection->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
      );
    }

    return self::$connection;
  }

  public static function getProducts()
  {
    $stmt = self::getConnection()->query(
      "SELECT * FROM products ORDER BY id DESC"
    );

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public static function login($username, $password)
  {
    $stmt = self::getConnection()->prepare(
      "SELECT * FROM users
         WHERE username = ? AND password = ?"
    );

    $stmt->execute([$username, $password]);

    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public static function getProductById($id)
  {
    $stmt = self::getConnection()->prepare(
      "SELECT * FROM products WHERE id = ?"
    );

    $stmt->execute([$id]);

    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public static function createProduct($name, $price, $stock)
  {
    $stmt = self::getConnection()->prepare(
      "INSERT INTO products(name, price, stock)
             VALUES(?, ?, ?)"
    );

    return $stmt->execute([$name, $price, $stock]);
  }

  public static function updateProduct($id, $name, $price, $stock)
  {
    $stmt = self::getConnection()->prepare(
      "UPDATE products
             SET name = ?, price = ?, stock = ?
             WHERE id = ?"
    );

    return $stmt->execute([
      $name,
      $price,
      $stock,
      $id
    ]);
  }

  public static function deleteProduct($id)
  {
    $stmt = self::getConnection()->prepare(
      "DELETE FROM products WHERE id = ?"
    );

    return $stmt->execute([$id]);
  }
}

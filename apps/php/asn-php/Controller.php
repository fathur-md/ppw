<?php

require_once __DIR__ . "/Model.php";

class Controller
{
  private $model;

  public function __construct($db)
  {
    $this->model = new Model($db);
  }

  public function index()
  {
    $data = $this->model->getAll();

    if ($data === false) {
      return [
        "success"   => false,
        "data"      => [],
        "error"     => "Query gagal / database error"
      ];
    }

    return [
      "success"   => true,
      "data"      => $data,
      "error"     => null
    ];
  }

  public function create($nama, $nim)
  {
    return $this->model->create($nama, $nim);
  }

  public function update($id, $nama, $nim)
  {
    return $this->model->update($id, $nama, $nim);
  }

  public function delete($id)
  {
    if (!$id) return false;

    return $this->model->delete($id);
  }

  public function find($id)
  {
    return $this->model->find($id);
  }
}

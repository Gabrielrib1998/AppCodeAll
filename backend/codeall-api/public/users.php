<?php
header('Content-Type: application/json');
require_once __DIR__ . '/../db.php';
try {
  $pdo = get_pdo();
  $users = $pdo->query('SELECT id,name,email,created_at FROM users ORDER BY id DESC')->fetchAll();
  echo json_encode(['users'=>$users]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['error'=>$e->getMessage()]);
}

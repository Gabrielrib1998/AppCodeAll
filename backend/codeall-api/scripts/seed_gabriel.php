<?php
require_once __DIR__ . '/../db.php';
try {
  $pdo = get_pdo();
  $name = 'Gabriel';
  $email = 'gabriel@example.com';
  $password = password_hash('123', PASSWORD_BCRYPT);
  $pdo->beginTransaction();
  $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ?');
  $stmt->execute([$email]);
  if (!$stmt->fetch()) {
    $stmt = $pdo->prepare('INSERT INTO users(name,email,password,created_at) VALUES(?,?,?,NOW())');
    $stmt->execute([$name, $email, $password]);
    echo "Usuario Gabriel criado.\n";
  } else {
    echo "Usuario Gabriel já existe.\n";
  }
  $pdo->commit();
} catch (Throwable $e) {
  if ($pdo && $pdo->inTransaction()) $pdo->rollBack();
  http_response_code(500);
  echo "Erro: " . $e->getMessage();
}

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

require_once __DIR__ . '/../db.php';

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$scriptName = $_SERVER['SCRIPT_NAME'] ?? '';
// Remove a base do script, para aceitar /public/index.php/login
if ($scriptName && strpos($requestUri, $scriptName) === 0) {
  $path = substr($requestUri, strlen($scriptName));
} else {
  $path = $requestUri;
}
$path = '/' . ltrim(rtrim($path, '/'), '/');

// Alguns servidores expõem PATH_INFO (ex.: /login)
$pathInfo = $_SERVER['PATH_INFO'] ?? '';
if (!empty($pathInfo)) {
  $path = '/' . ltrim(rtrim($pathInfo, '/'), '/');
}

// Fallback via query string: index.php?route=login
if (isset($_GET['route']) && is_string($_GET['route'])) {
  $path = '/' . ltrim($_GET['route'], '/');
}
$method = $_SERVER['REQUEST_METHOD'];

function json_input() {
  $raw = file_get_contents('php://input');
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

try {
  if ($path === '/health' && $method === 'GET') {
    echo json_encode(['ok' => true]);
    exit;
  }

  if ($path === '/user' && $method === 'GET') {
    $email = isset($_GET['email']) ? trim((string)$_GET['email']) : '';
    if ($email === '') { http_response_code(400); echo json_encode(['error'=>'Parâmetro e-mail é obrigatório']); exit; }
    $pdo = get_pdo();
    // Busca case-insensitive por e-mail para evitar falhas por diferença de maiúsculas/minúsculas
    $stmt = $pdo->prepare('SELECT id, name, email, phone, cpf, cep, address, number, complement, district, city, created_at FROM users WHERE LOWER(email) = LOWER(?) LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if (!$user) { http_response_code(404); echo json_encode(['error'=>'Usuário não encontrado']); exit; }
    echo json_encode(['ok'=>true, 'user'=>$user]);
    exit;
  }

  if ($path === '/register' && $method === 'POST') {
    $data = json_input();
    $required = ['name','email','password'];
    foreach ($required as $r) { if (empty($data[$r])) { http_response_code(400); echo json_encode(['error'=>"Campo '$r' é obrigatório"]); exit; } }

    $pdo = get_pdo();
    // Normaliza e-mail para minúsculas e faz verificação case-insensitive de duplicidade
    $emailNorm = strtolower(trim((string)$data['email']));
    $stmt = $pdo->prepare('SELECT id FROM users WHERE LOWER(email) = LOWER(?) LIMIT 1');
    $stmt->execute([$emailNorm]);
    if ($stmt->fetch()) { http_response_code(409); echo json_encode(['error'=>'E-mail já cadastrado']); exit; }

    $hash = password_hash($data['password'], PASSWORD_BCRYPT);
    $stmt = $pdo->prepare('INSERT INTO users(name,email,password,phone,cpf,cep,address,number,complement,district,city,created_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,NOW())');
    $stmt->execute([
      $data['name'],
      $emailNorm,
      $hash,
      $data['phone'] ?? null,
      $data['cpf'] ?? null,
      $data['cep'] ?? null,
      $data['address'] ?? null,
      $data['number'] ?? null,
      $data['complement'] ?? null,
      $data['district'] ?? null,
      $data['city'] ?? null,
    ]);

    echo json_encode(['ok'=>true, 'id'=>$pdo->lastInsertId()]);
    exit;
  }

  if ($path === '/login' && $method === 'POST') {
    $data = json_input();
    $email = isset($data['email']) ? trim((string)$data['email']) : '';
    $password = isset($data['password']) ? (string)$data['password'] : '';
    if ($email === '' || $password === '') { http_response_code(400); echo json_encode(['error'=>'E-mail e senha são obrigatórios']); exit; }
    $pdo = get_pdo();
    // Busca case-insensitive para aceitar e-mails com letras maiúsculas/minúsculas
    $stmt = $pdo->prepare('SELECT id,name,email,password FROM users WHERE LOWER(email) = LOWER(?) LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if (!$user) { http_response_code(401); echo json_encode(['error'=>'Credenciais inválidas']); exit; }
    $stored = (string)$user['password'];
    $ok = password_verify($password, $stored);
    // Migração suave: se senha armazenada não for hash e bater literalmente, atualiza para bcrypt
    if (!$ok) {
      $isBcrypt = preg_match('/^\$2y\$/', $stored) === 1;
      if (!$isBcrypt && hash_equals($stored, $password)) {
        $novoHash = password_hash($password, PASSWORD_BCRYPT);
        $upd = $pdo->prepare('UPDATE users SET password = ? WHERE id = ?');
        $upd->execute([$novoHash, $user['id']]);
        $ok = true;
      }
    }
    if (!$ok) { http_response_code(401); echo json_encode(['error'=>'Credenciais inválidas']); exit; }
    echo json_encode(['ok'=>true,'user'=>['id'=>$user['id'],'name'=>$user['name'],'email'=>$user['email']]]);
    exit;
  }

  http_response_code(404);
  echo json_encode(['error'=>'Endpoint não encontrado']);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['error'=>'Erro interno','detail'=>$e->getMessage()]);
}

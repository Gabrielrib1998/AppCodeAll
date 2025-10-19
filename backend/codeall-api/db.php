<?php
function get_db_config() {
  return include __DIR__ . '/config.php';
}

function get_pdo() {
  $cfg = get_db_config();
  $host = $cfg['host'];
  $port = isset($cfg['port']) ? (int)$cfg['port'] : null;
  $dbname = $cfg['dbname'];
  $charset = $cfg['charset'];
  $dsn = "mysql:host={$host};" . ($port ? "port={$port};" : "") . "dbname={$dbname};charset={$charset}";
  $options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ];
  return new PDO($dsn, $cfg['user'], $cfg['pass'], $options);
}

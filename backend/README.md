# CodeAll API (PHP + MySQL via XAMPP)

## Requisitos
- XAMPP instalado (Apache + MySQL)

## Instalação
1. Crie o schema do banco:
   - Abra o phpMyAdmin (http://localhost/phpmyadmin)
   - Execute o arquivo `backend/codeall-api/schema.sql`

2. Copie os arquivos da API para o XAMPP:
   - Copie a pasta `backend/codeall-api` para `C:\\xampp\\htdocs\\codeall-api`

3. Ajuste a config se necessário:
   - Edite `codeall-api/config.php` com o host, usuário e senha do MySQL

4. Teste os endpoints:
   - Registro: `POST http://localhost/codeall-api/public/index.php/register`
     - Body JSON: `{ "name":"Seu Nome", "email":"voce@exemplo.com", "password":"123456" }`
   - Login: `POST http://localhost/codeall-api/public/index.php/login`
     - Body JSON: `{ "email":"voce@exemplo.com", "password":"123456" }`

## CORS
- Habilitado com `Access-Control-Allow-Origin: *` para facilitar o desenvolvimento mobile com Expo.

## Usuário de teste (Gabriel)
- Execute um dos métodos abaixo para criar o usuário padrão:
   - Via SQL: importe `backend/codeall-api/seed_gabriel.sql` no phpMyAdmin
   - Via script: acesse no navegador `http://localhost/codeall-api/scripts/seed_gabriel.php`
- Credenciais:
   - email: gabriel@example.com
   - senha: 123

## Configurando a BASE_URL no app
- Edite `src/services/api.ts` ou chame `setBaseUrl` no bootstrap do app:
   - iOS Simulator: `http://localhost/codeall-api/public/index.php`
   - Android Emulator: `http://10.0.2.2/codeall-api/public/index.php`
   - Dispositivo físico: `http://SEU_IP_LOCAL/codeall-api/public/index.php`


# Тестовый проект MyPAY Laravel
Добро пожаловать в проект myPAY

## Как это запустить
Предварительные требования: 
1. Наличие на машине Docker

Порядок развертывания:
1. Клонируем репозиторий
2. Заходим в корень репозитория и запускаем `docker-compose up -d --build site`
3. Composer: `docker-compose run --rm composer install`
4. NPM: `docker-compose run --rm npm install`
5. .env: `cp .env.example .env`
6. Миграции: `docker-compose exec php php artisan migrate`
7. Добавить пару пользователей: `docker-compose exec php php artisan create:user user1` (пароль: secret), `docker-compose exec php php artisan create:user user2`
8. Установить им баланс: `docker-compose exec php php artisan balance user1 500`, `docker-compose exec php php artisan balance user2 400`
9. Провести транзакцию: `docker-compose exec php php artisan make_transaction user1 user2 20 описание`, 
	общий формат команды: `docker-compose exec php php artisan make_transaction [from_user_login] [to_user_login] [amount] [description]`
	
	
## Как зайти
После завершения развертывания проект доступен на `http://localhost:8080`
Логин для входа `user1@test-laravel.org`, пароль `secret`

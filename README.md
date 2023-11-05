Обязательноые условия
   - node js версии v20.5.0
   - npm версии 9.8.0

папка ./bots/ - папка с ботами ватсапп и телеграмм
папка ./postgre-web-dashboard/ - сайт дешбоард

Запуск сайта:
   cd ./postgre-web-dashboard/ - вход в каталог с сайтом
   npm i - скачать пакеты
   npm run build - билдим проект
   npm run preview - запуск сервера для сайта 
   готово, ссылка на открытие сайта в локальной сети появится к терминале

P.S чтобы сайт функционировал в файле ./postgre-web-dashboard/src/api.ts заменить baseUrl (ссылка на сервер моего коллеги на .net)


Запуск бота telegram: 
   cd ./bots/ - попадаем в каталог с ботом
   npm i - скачать пакеты
   npm run dev - запустить бота

P.S чтобы бот функционировал в файле ./bots/src/api.js заменить baseUrl (ссылка на сервер моего коллеги на .net)
P.S. так же в файле ./bots/src/bot.js заменить token на свой (который берем в телеграмме при создании бота)


Запуск бота whatsapp: 
   cd ./bots/ - попадаем в каталог с ботом
   npm i - скачать пакеты
   cd ./whatsAppSrc/ - перейти в каталог с ботов whatsapp
   npm run dev - запустить бота

P.S чтобы бот функционировал в файле ./bots/whatsAppSrc/api.js заменить baseUrl (ссылка на сервер моего коллеги на .net)
P.S. так же в файле ./bots/whatsAppSrc/bot.js заменить token на свой (который берем в телеграмме при создании бота)
P.S надо по qr коду в терминале после запуска бота авторизироваться в whatsapp после чего аккаунт будет работать как бот 
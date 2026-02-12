Базовая реализация сервера на Node.js/TS/Express с подключением к локальной MongoDB через Mongoose.

Схема Mongoose самая базовая:
- name: string
- age: number

Запуск:
- npm i
- mongod --dbpath "C:/data/db" (Если не запущена и не выполнен connect в графической версии)
- npm run dev (Старт сервера)

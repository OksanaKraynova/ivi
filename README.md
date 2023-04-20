# API - Микросервиса GANRES

## Создание жанров / Создание жанра при создании фильма
```json
// HTTP - POST - api/ganres/movie
// AMQP - createGanre

// Создаст жанр и привяжет его к фильму с идентификатором 1
{
    "movie_id":1,
    "name":"History"
}
// Создаст жанр
{
     "name":"History"
}
```
## Подключение жанров к фильму

```json
// HTTP - POST - api/ganres
// AMQP - createMovieGanre
{
    "movie_id":2, // Идентификатор фильма
    "ganres":[5, 6] // Массив жанров
}
```
## Получение всех жанров
```json
// HTTP - GET - api/ganres
// AMQP - getGanres

// параметры для пагинации
// limit - Разбиение выборки на указанное кол-во элементов
// offcet - Смещение ("номер страницы")
{
    "items": [
        {
            "id": 5,
            "name": "Cartoon"
        },
        {
            "id": 6,
            "name": "Horror"
        },
        {
            "id": 7,
            "name": "Comedy"
        }
    ],
    "count": 3
}
```
## Получение всех жанров у фильма
```json
// HTTP - GET - api/ganres/:id
// AMQP - getMoviesGanres
{
    "movie_id": "2",
    "ganres": [
        "Cartoon",
        "Horror"
    ]
}
```
## Обновление жанров
```json
// HTTP - PATCH - /api/ganres/:id
// AMQP - updateGanre
{
    "name":"Horror2"
}
```
## Удалить жанр
```json
// HTTP - DELETE - /api/ganres/:id
// AMQP - deleteGanre
```
# TABLE
Relations ONE-TO-MAY
```js
+-------------+--------------+----------------------------+
|                         ganres_movies                   |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| movie_id    | int(11)      |                            |
| ganre_id    | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+

+-------------+--------------+----------------------------+
|                          user                           |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
+-------------+--------------+----------------------------+
```
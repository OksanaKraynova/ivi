RUN: docker compose up

API URL - http://localhost:8081

## 1. MOVIE
  ### GET ALL MOVIES WITH FILTERS (V)
    - GET - /v1/movies
      - Query Params
          - limit - 18
          - offset - 0
          - sorting - id (name,year,estimation,rating)
          - sortDir - ASC (DESC)
          - search - ?search=Джен (search by name & name_translate)
          - countries - ?countries=19,20
          - ganres - ?ganres=71,72
          - directors - ?directors=1,3
          - rating - ?rating=3-8.4
          - estimation - ?estimation=750-950

  ### GET MOVIE WITH COMMENTS & GANRES & PERSONS BY MOVIE ID (V)
    - GET - /v1/movie/MOVIE_ID

  ### CREATE MOVIE (V)
    - POST - /v1/movie
      - JSON
        - {
            "name":"Форрест Гамп",
            "name_translate":"Forrest Gump",
            "type":"movie",
            "description":"Один из самых известных фильмов Роберта Земекиса «Форрест Гамп» по ...!",
            "slogan":"Run Fores, Run",
            "year":"1994",
            "film_time":"2 ч. 16 мин",
            "age":"+16",
            "video_quality":"FullHD,HD",
            "files":[1,2],
            "countries":[1,2],
            "ganres":[1,2],
            "directors":[1,2],
            "rating":8.5,
            "estimation":500
          }

  ### UPDATE MOVIE BY ID (V)
    - PATCH - /v1/movie/MOVIE_ID
      - JSON
        - {
            "name":"Форрест Гамп",
            "name_translate":"Forrest Gump",
            "type":"movie",
            "description":"Один из самых известных фильмов Роберта Земекиса «Форрест Гамп» по ...!",
            "slogan":"Run Fores, Run",
            "year":"1994",
            "film_time":"2 ч. 16 мин",
            "age":"+16",
            "video_quality":"FullHD,HD",
            "files":[1,2],
            "countries":[1,2],
            "ganres":[1,2],
            "directors":[1,2],
            "rating":8.5,
            "estimation":500
          }

  ### DELETE MOVIE BY ID (V)
    - DELETE - /v1/movie/MOVIE_ID

  ### COUNTRY
    - GET COUNTRY
      - GET - /v1/country

## 2. GANRES
  ### GET ALL GANRES (V)
    - GET - /v1/ganres

  ### CREATE GANRE (V)
    - POST - /v1/ganres
      - JSON
        - {
            "name":"Ganre name"
          }

  ### UPDATE GANRE (V)
    - PATCH - /v1/ganres/GANRE_ID
      - JSON
        - {
            "name":"Ganre rename"
          }

  ### DELETE GANRE (V)
    - DELETE - /v1/ganres/GANRE_ID

## 3. AUTH
  ### SIGNIN (V)
    - POST -/v1/signIn
      - JSON
        - {
            "email": "test@mail.com",
            "password": "123456"
          }

  ### SIGNUP (V)
    - POST - /v1/signUp
      - JSON
         - {
            "login":"login",
            "email": "test@mail.com",
            "password": "123456"
          }

  ### GET REFRESH TOKEN (V) - ? get userId
    - GET - /v1/refresh

  ### LOGOUT (V) - ? get userId
    - POST - /v1/logout

  ### GET ALL USERS (V)
    - GET - /v1/users

  ### UPDATE USER (V)
    - PATCH - /v1/user/USER_ID
      - JSON
        - {
            "role":"Admin" or "User"
          }

## 4. PERSONS
  ### GET MOVIE PERSONS WITH FILTER (V)
    - GET - /v1/persons/MOVIE_ID

  ### GET PERSON BY ID (V)
    - GET - /v1/person/PERSON_ID

## 5. COMMENTS
  ### GET MOVIE COMMENTS WITH FILTERS (V)
    - GET - /v1/comments
      - Query Params
        - limit
        - offset
        - movie_id - comments for movie

  ### CREATE COMMENT (V)
    - POST - /v1/comments
      - JSON
        - {
            "movie_id":2,
            "author_id":1,
            "comment":"Comment Name",
            "parent": 1
          }

  ### UPDATE COMMENT (V)
    - PATCH - /v1/comments/COMMENT_ID

  ### DELETE COMMENT (V)
    - DELETE - /v1/comments/COMMENT_ID

## 6. FILES
  ### UPLOAD FILES (V)
    - POST - /v1/upload
      - FormData
        - max files, 5
        - essence || null
        - essence_id || null

  ### GET ESSENCE FILES BY ESSENCE_ID (V)
    - GET -  - /v1/files

  ### DELETE ALL ESSENCE FILES BY ESSENCE_ID (V)
    - DELETE - /v1/files/ESSENCE/ESSENCE_ID

  ### DELETE FILE BY ID (V)
    - DELETE - /v1/file/FILE_ID
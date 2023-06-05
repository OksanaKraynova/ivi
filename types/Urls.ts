enum Urls {
  SERVER_URL = "http://178.208.64.187",
  SERVER_PORT = "8081",

  ALL_COMMENTS = "/v1/comments",//есть параметры http://178.208.64.187:3006/api/comments?parent=1
  ALL_COUNTRIES = "/v1/country",
  ALL_GANRES = "/v1/ganres",
  ALL_MOVIES = "/v1/movies",//есть параметры
  ONE_MOVIE = "/v1/movie",
  ALL_PERSONS = "/v1/persons",
  ALL_PERSONS_FILTER = "/v1/persons/name",
  ONE_PERSON_IN_MOVIE = "/v1/person",//http://178.208.64.187:3002/api/persons?id=1
  UPLOAD_FILES = "/v1/upload",

  //есть параметры у файлов


  ALL_COMMENTS_API = "/api/comments",
  COMMENTS_PORT = "3006",
  MOVIES_PORT = "3006",
  PERSONS_PORT = "3002",
  FILES_PORT = "3004",
}

export default Urls;

// http://178.208.64.187:8081/v1/users
// http://178.208.64.187:8081/v1/person/1
// http://178.208.64.187:8081/vi/comments?parent=1
// http://178.208.64.187:8081/v1/comments
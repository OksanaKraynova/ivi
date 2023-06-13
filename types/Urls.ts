enum Urls {
  SERVER_URL = "http://178.208.64.187",
  SERVER_PORT = "8081",
  FILES_PORT = "3004",
  AUTHORIZATION_PORT = "5000",

  ALL_COMMENTS = "/v1/comments",
  ALL_COUNTRIES = "/v1/country",
  ALL_GANRES = "/v1/ganres",
  ALL_MOVIES = "/v1/movies",
  ONE_MOVIE = "/v1/movie",
  ALL_PERSONS = "/v1/persons",
  ALL_PERSONS_FILTER = "/v1/persons/name",
  ONE_PERSON_IN_MOVIE = "/v1/person",
  ALL_FILES = "/v1/files",
  UPLOAD_FILES = "/v1/upload",

  AUTHORIZATION_SIGN_UP = "/v1/signUp",
  AUTHORIZATION_SIGN_IN = "/v1/signIn",

  REFRESH_TOKEN = "/v1/refresh",

  AUTHORIZATION_API = "/api/oauth",

  REDIRECT_URI = "http://localhost:3000/oAuth",
  ROOT_URL_VK = "https://oauth.vk.com/authorize",
  ROOT_URL_GOOGLE = "https://accounts.google.com/o/oauth2/v2/auth"
}

export default Urls;
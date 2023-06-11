import Search from "@/src/components/Search/Search";
import axios from "axios";
import React, { useEffect, useState } from "react";

const testData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const experement = () => {

  const [commentIndex, setCommentIndex] = useState<number>(1);
  const [value, setValue] = useState<string>();
  const [values, setValues] = useState<number[]>([]);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    timer = setTimeout(() => setValues(testData.filter(item => value !== undefined && item >= +value)), 1000);
  }, [value]);



  const user = { email: "test@mail.com", password: "123456", login: "login" };

  async function signIn() {
    const url = "http://178.208.64.187:8081/v1/signIn"

    const response = axios.post(url, {
      email: user.email,
      password: user.password,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function signUp() {
    const url = "http://178.208.64.187:8081/v1/signUp"

    const response = axios.post(url, {
      login: user.login,
      email: user.email,
      password: user.password,
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function refresh() {
    const url = "http://178.208.64.187:8081/v1/refresh"

    const response = axios.get(url)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    return response;
  }

  async function test() {
    const url = "http://178.208.64.187:3006/api/comments?parent=1"

    const response = axios.get(url)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    return response;
  }

  async function comment() {

    const url = "http://178.208.64.187:8081/v1/comments"

    const response = axios.post(url, {
      movie_id: 1,
      author_id: 2,
      comment: "Parent:0,Comment:" + commentIndex,
      parent: "0"
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    setCommentIndex(commentIndex + 1);
    return response;
  }

  async function film() {
    const url = "http://178.208.64.187:8081/v1/movie"

    const response = axios.post(url, {
      name: "Форрест Гамп3",
      name_translate: "Forrest Gump",
      type: "movie",
      description: "Один из самых известных фильмов Роберта Земекиса «Форрест Гамп» по ...!",
      slogan: "Run Fores, Run",
      year: "1994",
      film_time: "2 ч. 16 мин",
      age: "+16",
      video_quality: "FullHD,HD",
      files: [1, 2],
      countries: [1, 2],
      ganres: [1, 2],
      directors: [1, 2],
      rating: 8.5,
      estimation: 500
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function genre() {
    const url = "http://178.208.64.187:8081/v1/ganres/1"

    const response = axios.patch(url, {
      name: "Криминал",
      translate: "Crime"
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function filmUpdate() {
    const url = "http://178.208.64.187:8081/v1/movie/5"

    const response = axios.patch(url, {
      name: "Форрест Гамп3",
      name_translate: "Forrest Gump",
      type: "movie",
      description: "Один из самых известных фильмов Роберта Земекиса «Форрест Гамп» по ...!",
      slogan: "Run Fores, Run",
      year: "1994",
      film_time: "2 ч. 16 мин",
      age: "+16",
      video_quality: "FullHD,HD",
      // files: [1, 2],
      // countries: [1, 2],
      // ganres: [1, 2],
      // directors: [1, 2],
      rating: 8.5,
      estimation: 500
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function filmDelete() {
    const url = "http://178.208.64.187:8081/v1/movie/4"

    const response = axios.delete(url)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }

  async function filmFilter() {
    const url = "http://178.208.64.187:8081/v1/movie/5"

    const response = axios.get(url)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    return response;
  }


  return (
    <div className="container">
      {/* <img src="http://178.208.64.187:3004/image/movie/1/7e9d7cb66bd9061567f8c85ae3544fe6"></img> */}

      <div className="div">
        <input
          onChange={(event) => user.email = event.target.value}
          value={"test@mail.com"}
        />
      </div>

      <div className="div">
        <input
          onChange={(event) => user.password = event.target.value}
          value={"123456"}
        />
      </div>

      <div className="div">
        <input
          onChange={(event) => user.login = event.target.value}
          value={"login"}
        />
      </div>

      <div className="div">
        <button
          onClick={() => signUp()}
        >
          Авторизация
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => refresh()}
        >
          Рефреш
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => signIn()}
        >
          Создание аккаунта
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => test()}
        >
          Тест
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => comment()}
        >
          Добавить коммент
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => film()}
        >
          Добавить фильм
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => genre()}
        >
          Отредактировать жанр
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => filmUpdate()}
        >
          Отредактировать фильм
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => filmDelete()}
        >
          Удалить фильм
        </button>
      </div>

      <div className="div">
        <button
          onClick={() => filmFilter()}
        >
          Фильтр
        </button>
      </div>

      <Search<number>
        placeholder='Актеры'
        options={values}
        onChange={(event) => {
          clearTimeout(timer);
          setValue(event.target.value);
        }}
        addItem={count => setValues(values.includes(count) ? values : [...values, count])}
        renderItem={count => count.toString()}
      />

    </div>
  );
};

export default experement;
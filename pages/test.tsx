import Layout from "@/src/components/Layout/Layout";
import Movies from "@/src/components/Movies/Movies";
import { Urls } from "@/types/Urls";
import axios from "axios";
import React from "react";

const test = () => {

  async function queryData(metod: "get" | "post", queryUrl: string, queryParams?: string[]) {
    const baseUrl = Urls.SERVER_URL;
    const basePort = Urls.SERVER_PORT;
    const params_url = queryParams === undefined ?
      "" :
      "?" + queryParams.join("&");
    const url = baseUrl + ":" + basePort + queryUrl + params_url;

    const response = axios({
      method: metod,
      url: url,
    })
      .then(response => response.data)
      .catch(error => console.log(error));

    return response;
  }

  queryData("get", Urls.ALL_MOVIES, ["limit=2", "sorting=year"]);

  return (
    <div className="container">

    </div>
  );
};

export default test;
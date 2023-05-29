import { Urls } from "@/types/Urls";
import axios from "axios";

export async function queryData(metod: "get" | "post", port: string, queryUrl: string, queryParams?: string[]): Promise<any> {
  const baseUrl = Urls.SERVER_URL;
  const params_url = queryParams === undefined ?
    "" :
    "?" + queryParams.join("&");
  const url = baseUrl + ":" + port + queryUrl + params_url;

  const response = axios({
    method: metod,
    url: url,
  })
    .then(response => response.data)
    .catch(error => console.log(error));

  return response;
}
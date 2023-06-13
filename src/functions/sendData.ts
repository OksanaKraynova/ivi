import Urls from "../../types/Urls";
import axios, { AxiosResponse } from "axios";

export default async function sendData(
  metod: "post" | "delete" | "patch",
  queryUrl: string,
  params?: { [param: string]: string | number | number[] | null }
): Promise<AxiosResponse> {

  const url = Urls.SERVER_URL + ":" + Urls.SERVER_PORT + queryUrl;

  const promise = axios({
    method: metod,
    url: url,
    data: params
  })
    .then(response => response)
    .catch(error => error);

  return promise;
}
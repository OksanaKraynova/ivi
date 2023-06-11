import Urls from "../../types/Urls";
import axios from "axios";

export default async function sendData(
  metod: "post" | "delete" | "patch",
  queryUrl: string,
  params?: { [param: string]: string | number | number[] | null } | FormData
): Promise<number> {

  const url = Urls.SERVER_URL + ":" + Urls.SERVER_PORT + queryUrl;

  const promise = axios({
    method: metod,
    url: url,
    data: params
  })
    .then(response => response.status)
    .catch(error => error.response);

  return promise;
}
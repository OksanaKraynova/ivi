import { Urls } from "@/types/Urls";
import axios from "axios";

export async function sendData(
  metod: "post" | "delete" | "patch",
  port: string,
  queryUrl: string,
  params?: { [param: string]: string | number | null }
): Promise<number> {

  const baseUrl = Urls.SERVER_URL;
  const url = baseUrl + ":" + port + queryUrl;

  const promise = axios({
    method: metod,
    url: url,
    params: params
  })
    .then(response => response.status)
    .catch(error => error.response);

  return promise;
}
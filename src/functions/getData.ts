import Urls from "@/types/Urls";
import axios from "axios";

export default async function getData<T>(
  port: string,
  queryUrl: string,
  params?: { [param: string]: string | number | null }
): Promise<T> {

  const baseUrl = Urls.SERVER_URL;
  const url = baseUrl + ":" + port + queryUrl;

  const promise = axios.get<T>(url, { params: params })
    .then(response => response.status === 200 ? response.data : null)
    .catch(error => { console.log(error); return error });

  return promise;
}
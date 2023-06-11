import Urls from "@/types/Urls";
import axios from "axios";

export default async function getData<T>(
  port: string,
  queryUrl: string,
  params?: { [param: string]: string | number | null }
): Promise<T | null> {

  const baseUrl = Urls.SERVER_URL;
  const url = baseUrl + ":" + port + queryUrl;

  const promise = axios.get<T | null>(url, { params: params })
    .then(response => response.data)
    .catch(error => { console.log(error); return null; });

  return promise;
}
import Urls from "../../types/Urls";
import axios from "axios";

export default async function sendFile<T>(params?: FormData): Promise<T | number> {

  const url = Urls.SERVER_URL + ":" + Urls.SERVER_PORT + Urls.UPLOAD_FILES;

  const promise = axios.post<T>(url, { data: params })
    .then(response => response)
    .catch(error => error.status);

  return promise;
}
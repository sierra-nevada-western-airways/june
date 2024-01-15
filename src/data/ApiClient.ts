import type { AxiosRequestConfig } from "axios";
import { Api } from "./Api";

export default function apiClient(): Api<void> {
  const config: AxiosRequestConfig = {
    baseURL: process.env.VITE_API_URL,
  };

  return new Api(config);
}

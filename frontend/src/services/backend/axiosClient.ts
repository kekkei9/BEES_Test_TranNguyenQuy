import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetcher = (url: string) =>
  axiosClient.get(url).then((res) => res.data);

import axios from "axios";
import { getTokenFromLocalStorage } from "../hooks/localStorage.helper";

export const base_URL = "https://skihub-server-production.up.railway.app/api";

const $api = axios.create({
  baseURL: base_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage() || ''}`,
  }
});

export default $api;

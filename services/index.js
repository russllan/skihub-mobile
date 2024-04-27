import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const base_URL = "https://skihub-server-production.up.railway.app/api/";

const $api = axios.create({
  baseURL: base_URL,
  withCredentials: true,
});

export default $api;

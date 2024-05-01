import axios from "axios";
import { base_URL } from "./index";

export default class AuthService {
  static async login(data) {
    const response = await axios.post(`${base_URL}/auth/login`, data);
    return response.data;
  }

  static async register(data) {
    const response = await axios.post(`${base_URL}/user/create`, data);
    return response.data;
  }
}

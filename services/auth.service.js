import axios from "axios";
import { base_URL } from "./index";

class AuthService {
    async login(data) {
        const response = await axios.post(`${base_URL}/login`, data)
        return response.data
    }

    async register(data) {
        const response = await axios.post(`${base_URL}/register`, data)
        return response.data
    }
}

export default new AuthService();
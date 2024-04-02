import { axios } from "axios";
import { base_URL } from ".";

class BaseService {
    async getAll() {
        const response = await axios.get(`${base_URL}/base/getAll`)
        return response.data
    }

    async post(data) {
        const response = await axios.post(`${base_URL}/base/create`, data)
        return response.data
    }
}

export default new BaseService();
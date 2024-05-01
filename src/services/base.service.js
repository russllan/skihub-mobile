import axios from "axios";
import { base_URL } from "./index";

class BaseService {
  async getAll() {
    const response = await axios.get(`${base_URL}/bases/getAll`);
    return response.data;
  }

  async post(data) {
    const response = await axios.post(`${base_URL}/bases/create`, data);
    return response.data;
  }

  async getOne(id) {
    const response = await axios.get(`${base_URL}/bases/${id}`);
    return response.data;
  }
}

export default new BaseService();

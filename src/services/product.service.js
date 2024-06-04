import $api, { base_URL } from ".";

class ProductService {
  async getAll() {
    try {
      const response = await $api.get(`/product`);
      return response.data;
    } catch (error) {
      console.log("Error fetching data" + error);
    }
  }

  async post(data) {
    const response = await $api.post(`${base_URL}/product/create`, data);
    return response.data;
  }

  async getOne(id) {
    const response = await $api.get(`/product/${id}`);
    return response.data;
  }

  async update(data) {
    const response = await $api.put(`/product/${data.id}`, data.data);
    return response.data;
  }
}

export default new ProductService();

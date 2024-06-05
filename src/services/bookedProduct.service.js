import $api from ".";

class BookedProductService {
    async getAll() {
        const response = await $api.get(`/booked-product/adminGet`);
        return response.data;
    }
    async createBookedProduct(data) {
        const response = await $api.post(`/booked-product/create`, data);
        return response.data;
    }
}

export default new BookedProductService();
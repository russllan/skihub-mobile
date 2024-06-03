import $api from ".";

class BookedProduct {
    async getAll() {
        const response = await $api.get(`/booked-product`);
        return response.data;
    }
    async createBookedProduct(data) {
        const response = await $api.post(`/booked-product/create`, data);
        return response.data;
    }
}

export default new BookedProduct();
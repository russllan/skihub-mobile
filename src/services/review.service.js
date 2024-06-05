import $api from ".";

class ReviewService {
    async getAll() {
        const response = await $api.get(`/review`);
        return response.data;
    }
    async createReview(data) {
        const response = await $api.post(`/review/create`, data);
        return response.data;
    }
}

export default new ReviewService();
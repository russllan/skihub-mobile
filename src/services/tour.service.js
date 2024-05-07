import $api from ".";

class TourService {
    async getAll() {
        const response = await $api.get(`/tour`);
        return response.data;
    }

    async create(data) {
        const response = await $api.post(`/tour/create`, data);
        return response.data;
    }

    async getOne(id) {
        const response = await $api.get(`/tour/${id}`);
        return response.data;
    }
}

export default new TourService();
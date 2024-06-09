import $api from ".";

class TourBookedService {
  async create(data) {
    const response = await $api.post(`/booked-tour`, data);
    return response.data;
  }
  async getBookedTour() {
    const response = await $api.get(`/booked-tour/adminGet`);
    return response.data;
  }
}

export default new TourBookedService();

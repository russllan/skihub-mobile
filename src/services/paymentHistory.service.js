import $api from ".";

class PaymentHistoryService {
    async getMyPayHistory() {
        const response = await $api.get(`/payment/getOne`);
        return response.data;
    }
}
export default new PaymentHistoryService();
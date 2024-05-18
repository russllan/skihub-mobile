import $api from ".";

class UserService {
    async getProfile() {
        const response = await $api.get(`/auth/profile`)
        return response.data;
    }
}

export default new UserService();
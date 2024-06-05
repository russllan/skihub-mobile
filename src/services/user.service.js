import $api from ".";

class UserService {
    async getProfile() {
        const response = await $api.get(`/auth/profile`);
        return response.data;
    }
    async getUser() {
        const response = await $api.get(`/user/getOne`);
        return response.data;
    }
}

export default new UserService();
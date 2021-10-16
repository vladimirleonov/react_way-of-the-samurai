import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '03dc85c1-6913-4689-96c3-0599c7316b8b'

    }
})



export const usersAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async follow (userId) {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    async unfollow (userId) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    }
}

export const profileAPI = {
    async getUserProfile (userId) {
        //https://social-network.samuraijs.com/api/1.0/profile/' + userId
        const response = await instance.get(`profile/${userId}`)
        return response.data;
    },
    async getUserStatus (userId) {
        const response = await instance.get(`profile/status/${userId}`);
        return response.data;
    },
    async updateUserStatus (status) {
        const response = await instance.put(`profile/status`, {
            status
        });
        return response.data;
    }
}

export const authMeAPI = {
    async getAuthData () {
        const response = await instance.get(`/auth/me`);
        return response.data;
    },
    async logout () {
        const response = await instance.delete(`/auth/login`);
        return response.data;
    },
    async login (email, password, rememberMe = false) {
        const response = await instance.post(`/auth/login`, {
            email,
            password,
            rememberMe
        });
        return response.data;
    }
}


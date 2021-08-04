import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '03dc85c1-6913-4689-96c3-0599c7316b8b'
    }
})



export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        debugger;
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId) {
        debugger;
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow (userId) {
        debugger;
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}


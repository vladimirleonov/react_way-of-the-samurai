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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        //https://social-network.samuraijs.com/api/1.0/profile/' + userId
        return instance.get(`profile/${userId}`)
            .then((response) => {
                return response.data;
            })
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus (status) {
        return instance.put(`profile/status`, {
            status
        }).then(response => response.data
        )
    }
}

export const authMeAPI = {
    getAuthData () {
        return instance.get(`/auth/me`)
            .then((response) => {
                return response.data;
            })
    },
    logout () {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    },
    login (email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {
            email,
            password,
            rememberMe
        })
            .then(response => response.data)
    }
}


import axios from "axios";
import {setAuthUserData} from "../Redux/authReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": 'c0f1a5eb-1294-4635-9118-a161642e7aba'}
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const followAPI = {
    postFollow(userId: number) {
        return instance.post(`follow/` + userId)
            .then(response => {
                return response.data
            })
    },
    deleteFollow(userId: number) {
        return instance.delete(`follow/` + userId)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthMe() {
       return  instance.get(`auth/me`)
           .then(response => {
               return response.data
           })
    }
}
export const profileAPI = {
    getUserProfile (userId: number) {
       return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}
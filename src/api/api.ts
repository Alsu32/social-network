import axios, {AxiosResponse} from "axios";
import {PhotoPropsType} from "../Redux/usersReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": 'c0f1a5eb-1294-4635-9118-a161642e7aba'}
})


//authAPI
export const authAPI = {
    getAuthMe() {
        return  instance.get<ResponseType<AuthMeResponseDataType>>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe:boolean = false) {
        return  instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: number }>>>(`auth/login`,
            {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return  instance.delete<ResponseType>(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}
// profileAPI
export const profileAPI = {
    getUserProfile (userId: number) {
        return instance.get<GetProfileUserType>(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getUserStatus (userId: number) {
        return instance.get<any>(`profile/status/` + userId)
            .then(response => {
                debugger
                return response.data
            })
    },
    updateUserStatus (status: string) {
        return instance.put<{status: string}, AxiosResponse<ResponseType>>(`profile/status/`, {status: status})
            .then(response => {
                debugger
                return response.data
            })
    }
}
// userAPI
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
// followAPI
export const followAPI = {
    postFollow(userId: number) {
        return instance.post<ResponseType>(`follow/` + userId)
            .then(response => {
                debugger
                return response.data
            })
    },
    deleteFollow(userId: number) {
        return instance.delete<ResponseType>(`follow/` + userId)
            .then(response => {
                debugger
                return response.data
            })
    }
}


// types
type ResponseType<T = {}> = {
    resultCode: 0
    messages: [],
    data: T
}
// types for authAPI
type AuthMeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}
//types for userAPI
type GetUsersResponseType = {
    items: UsersResponseType[]
    totalCount: number
    error: string
}
export type UsersResponseType = {
    id: number,
    name: string,
    status: null,
    photos: PhotoPropsType,
    followed: boolean
}
//types for profile
type GetProfileUserType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsUserType
    photos: PhotoPropsType
}
type ContactsUserType ={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
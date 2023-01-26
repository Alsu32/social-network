import {authAPI} from "../api/api";
import {UsersReducerActionType} from "./usersReducer";

export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
let initialState:AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state:AuthPropsType = initialState, action:AuthReducerActionType)=>{
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true};
        default:
            return state;
    }
}

export type  AuthReducerActionType = setUserDataACType
export type setUserDataACType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => {
    return {type: "SET-USER-DATA", data: {id, email, login}} as const
}

export const getAuthUserData = () => {
    return (dispatch: (action:AuthReducerActionType)=>void) => {
        authAPI.getAuthMe().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login))
            }})
    }
}
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

//state
let initialState: AuthPropsType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
//reducer
export const authReducer = (state: AuthPropsType = initialState, action: AuthReducerActionType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload};
        default:
            return state;
    }
}
//actions
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth:boolean) => {
    return ({type: "SET-USER-DATA", payload: {id, email, login, isAuth}} as const)
}
//thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
        return authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true))
            }
        })
    }
export const login = (email: string, password: string, rememberMe:boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = data.messages.length > 0 ? data.messages : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}
export const logout = () => (dispatch: Dispatch<AuthReducerActionType>) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
//types
export type AuthPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type  AuthReducerActionType =
    | ReturnType<typeof setAuthUserData>

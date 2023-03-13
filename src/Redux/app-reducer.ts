import {getAuthUserData} from "./authReducer";
import {AppActionType, AppThunkType} from "./redux-store";
import {Dispatch} from "redux";

//state
let initialState: AppPropsType = {
    initialized: false
}
//reducer
export const appReducer = (state: AppPropsType = initialState, action: AppReducerActionType) => {
    switch (action.type) {
        case "SET-INITIALIZED-SUCCESS":
            return {...state, initialized: true};
        default:
            return state;
    }
}
//actions
export const setInitializedSuccess = () => {
    return ({type: "SET-INITIALIZED-SUCCESS"} as const)
}
//thunks
export const initialize = (): AppThunkType => (dispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(setInitializedSuccess())
        })

}
//types
type AppPropsType = {
    initialized: boolean
}
export type AppReducerActionType = ReturnType<typeof setInitializedSuccess>
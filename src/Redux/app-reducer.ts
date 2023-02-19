import {getAuthUserData} from "./authReducer";

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
export const initialize = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(setInitializedSuccess())
        })

}
//types
type AppPropsType = {
    initialized: boolean
}
type AppReducerActionType = ReturnType<typeof setInitializedSuccess>
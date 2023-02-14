import {profileAPI} from "../api/api";

//state
let initialState: ProfilePostsPropsType = {
    postsData:
        [
            {id: 1, post: 'Hi! How are you?', likeCount: 15},
            {id: 2, post: 'It`s my first post', likeCount: 25}
        ],
    profile: null,
    status: ''
}
//reducer
export const profileReducer = (state:ProfilePostsPropsType = initialState, action:ProfileActionType)=>{
    switch (action.type) {
        case "ADD-POST":
            return {...state, postsData: [...state.postsData, {id: 5, post: action.postText, likeCount: 20}]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile};
        case "SET-USER-STATUS":
            return {...state, status: action.status};
        case "UPDATE-USER-STATUS":
            return {...state, status: action.status};
        default:
            return state;
    }
}
//actions
export const addPostAC = (postText:string) => {return {type: "ADD-POST", postText} as const}
export const setUserProfile = (profile:any) => {return {type: "SET-USER-PROFILE", profile} as const}
export const setUserStatus = (status:any) => {return {type: "SET-USER-STATUS", status} as const}
export const setUpdateUserStatus = (status:string) => {return {type: "UPDATE-USER-STATUS", status} as const}
//thunks
export const getUserProfile = (userId:number | undefined) => (dispatch: (action:ProfileActionType)=>void) => {
    if(!userId) {userId = 27434}
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}
export const getUserStatus = (userId:number | undefined) => (dispatch: (action:ProfileActionType)=>void) => {
    if(!userId) {userId = 27434}
    profileAPI.getUserStatus(userId).then(data => {
        dispatch(setUserStatus(data))
    })
}
export const updateUserStatus = (status: string) => (dispatch: (action:ProfileActionType)=>void) => {
    profileAPI.updateUserStatus(status)
        .then(data => {
        if (data.resultCode === 0) {dispatch(setUpdateUserStatus(status))}
    })
}
//types
export type PostPropsType = {
    id: number,
    post: string,
    likeCount: number
}
export type ProfilePostsPropsType = {
    postsData: Array<PostPropsType>
    profile: null | {}
    status: string
}
export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUpdateUserStatus>
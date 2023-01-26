import {profileAPI} from "../api/api";

export type PostPropsType = {
    id: number,
    post: string,
    likeCount: number
}
export type ProfilePostsPropsType = {
    postsData: Array<PostPropsType>,
    newPostText: string
    profile: null | {}
}
let initialState: ProfilePostsPropsType = {
    postsData:
        [
            {id: 1, post: 'Hi! How are you?', likeCount: 15},
            {id: 2, post: 'It`s my first post', likeCount: 25}
        ],
    newPostText: "New Post Text",
    profile: null
}


export const profileReducer = (state:ProfilePostsPropsType = initialState, action:ProfileActionType)=>{
    switch (action.type) {
        case "ADD-POST":
            return {...state, postsData: [...state.postsData, {id: 5, post: action.postText, likeCount: 20}], newPostText: ""}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile};
        default:
            return state;
    }

}

export type ProfileActionType = addPostACType | updateNewPostACType | setUserProfileACType
export type addPostACType = ReturnType<typeof addPostAC>
export const addPostAC = (postText:string) => {
    return {type: "ADD-POST", postText} as const
}
export type updateNewPostACType = ReturnType<typeof updateNewPostAC>
export const updateNewPostAC = (newText:string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText} as const
}
export type setUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile:any) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const getUserProfile = (userId:number | undefined) => (dispatch: (action:ProfileActionType)=>void) => {
        if(!userId) {userId = 2}
        profileAPI.getUserProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }


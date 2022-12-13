import {ActionsType} from "./state";

let initialState = {
    postsData:
        [
            {id: 1, post: 'Hi! How are you?', likeCount: 15},
            {id: 2, post: 'It`s my first post', likeCount: 25}
        ],
    newPostText: "New Post Text"
}
export const profileReducer = (state:any = initialState, action:ActionsType)=>{
    switch (action.type) {
        case "ADD-POST":
            const newPost = {id: 5, post: action.postText, likeCount: 20};
            state.postsData = [newPost, ...state.postsData]
            state.newPostText = ""
            return state

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};
        default:
            return state;
    }

}

export const addPostAC = (postText:string) => {
    return {type: "ADD-POST", postText} as const
}
export const updateNewPostAC = (newText:string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText} as const
}

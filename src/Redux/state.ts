import {StatePropsType} from "../App";
import {addPostAC, updateNewPostAC, profileReducer} from "./profileReducer";
import messageReducer, {sendMessageAC, updateNewMessageAC} from "./messageReducer";

export type StoreType = {
    _state: StatePropsType
    getState: ()=>StatePropsType
    _renderEntireTree: (state:StatePropsType)=> void
    subscribe: (observer:(state:StatePropsType)=>void)=>void
    dispatch: (action: ActionsType)=>void
}

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof updateNewMessageAC> | ReturnType<typeof sendMessageAC>


const store:StoreType = {
    _state: {
        profilePage: {
            postsData:
                [
                    {id: 1, post: 'Hi! How are you?', likeCount: 15},
                    {id: 2, post: 'It`s my first post', likeCount: 25}
                ],
            newPostText: "New Post Text"
        },
        messagesPage: {
            dialogsData:
                [
                    {id: 1, name: 'Anna'},
                    {id: 2, name: 'Denis'},
                    {id: 3, name: 'Mary'},
                    {id: 4, name: 'Nik'},
                    {id: 5, name: 'Sofia'}
                ],
            messageData:
                [
                    {id: 1, message: 'Hi!'},
                    {id: 2, message: 'How about meeting?'},
                    {id: 3, message: "'It's good idea!"},
                    {id: 4, message: 'I am free on Saturday:)'}
                ],
            newMessageText: ""
        }
    },
    _renderEntireTree () {

    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._renderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)

    }
}


export default store;
//window.store = store;

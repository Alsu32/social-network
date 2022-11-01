import {renderTree} from "../render";

let state = {

    profilePage: {
        postsData:
            [
                {id: 1, post: 'Hi! How are you?', likeCount: 15},
                {id: 2, post: 'It`s my first post', likeCount: 25}
            ]
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
            ]
    }


}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likeCount: 20
    }
    state.profilePage.postsData.push(newPost)
    renderTree(state)
}

export default state;
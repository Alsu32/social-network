let renderEntireTree = ()=>{

}

let state = {

    profilePage: {
        postsData:
            [
                {id: 1, post: 'Hi! How are you?', likeCount: 15},
                {id: 2, post: 'It`s my first post', likeCount: 25}
            ],
        newPostText: "newPostText"
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

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likeCount: 20
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree(state)
}

export const updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const subscribe = (observer)=>{
    renderEntireTree = observer
}

export default state;
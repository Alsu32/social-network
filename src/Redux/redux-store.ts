import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profileReducer";
import messageReducer from "./messageReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagesPage: messageReducer,
        usersPage: usersReducer
    }
)

let store = createStore(reducers)

export type AppRootPropsType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
export default store;
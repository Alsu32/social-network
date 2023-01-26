import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootPropsType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
export default store;
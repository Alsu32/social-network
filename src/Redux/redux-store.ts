import {applyMiddleware, combineReducers, createStore} from "redux"
import {profileReducer} from "./profileReducer";
import {messageReducer} from "./messageReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootPropsType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;
export default store;
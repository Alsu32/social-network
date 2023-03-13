import {applyMiddleware, combineReducers, createStore} from "redux"
import {ProfileActionType, profileReducer} from "./profileReducer";
import {MessageActionType, messageReducer} from "./messageReducer";
import {usersReducer, UsersReducerActionType} from "./usersReducer";
import {authReducer, AuthReducerActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer, AppReducerActionType} from "./app-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        messagePage: messageReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppRootPropsType = ReturnType<typeof reducers>

// все типы actions для всего app
export type AppActionType = AppReducerActionType | ProfileActionType | AuthReducerActionType | MessageActionType | UsersReducerActionType

// тип для всех thunks
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootPropsType, unknown, AppActionType>

// @ts-ignore
window.store = store;
export default store;
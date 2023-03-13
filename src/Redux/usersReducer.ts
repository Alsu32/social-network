import {followAPI, userAPI} from "../api/api";
import {AppActionType} from "./redux-store";
import {Dispatch} from "redux";

// state
let initialState:UsersPagePropsType = {
    users:
        [
            /*{id: 1, followed: true, fullName: "Svetlana", status: 'I am shopping!', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, followed: true, fullName: "Jack", status: 'I sleep, come later', location: {city: 'New York', country: 'USA'}},
            {id: 3, followed: false, fullName: "Nicola", status: 'Listening jazz and relaxing)', location: {city: 'Paris', country: 'France'}},*/
        ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}

// reducer
export const usersReducer = (state:UsersPagePropsType = initialState, action:UsersReducerActionType)=>{
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        case "SET-USERS":
            return {...state, users: action.users};
        case "SET-CURRENT-PAGE":
            return {...state, currentPage:action.currentPage};
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount:action.totalUsersCount / 500};
        case "SET-IS-FETCHING":
            return {...state, isFetching:action.isFetching};
        case "SET-FOLLOW-IN-PROGRESS":
            return {...state, followInProgress: action.isFollowInProgress
                        ? [...state.followInProgress, action.userId]
                        : state.followInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }

}

//actions
export const follow = (userId:number) => {return {type: "FOLLOW", userId} as const}
export const unFollow = (userId:number) => {return {type: "UNFOLLOW", userId} as const}
export const setUsers = (users:Array<UserPropsType>) => {return {type: "SET-USERS", users} as const}
export const setCurrentPage = (currentPage:number) => {return {type: "SET-CURRENT-PAGE", currentPage} as const}
export const setTotalUsersCount = (totalUsersCount:number) => {return {type: "SET-TOTAL-USERS-COUNT", totalUsersCount} as const}
export const setIsFetching = (isFetching:boolean) => {return {type: "SET-IS-FETCHING", isFetching} as const}
export const setFollowInProgress = (isFollowInProgress:boolean, userId: number) => {
    return {type: "SET-FOLLOW-IN-PROGRESS", isFollowInProgress, userId} as const
}

//thunks
export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch<AppActionType>) => {
        dispatch(setIsFetching(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const setUnFollowUser = (userId: number) => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setFollowInProgress(true, userId))
        followAPI.deleteFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(userId))
                dispatch(setFollowInProgress(false, userId))
            }
        })
    }
}
export const setFollowUser = (userId: number) => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setFollowInProgress(true, userId))
        followAPI.postFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
                dispatch(setFollowInProgress(false, userId))
            }
        })
    }
}

// types
export type UsersPagePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: Array<number>
}
export type UserPropsType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": PhotoPropsType,
    "status": null,
    "followed": boolean
}
export type PhotoPropsType = {
    "small": null,
    "large": null
}
export type  UsersReducerActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setTotalUsersCountACType | setIsFetchingACType | setFollowInProgressACType
export type followACType = ReturnType<typeof follow>
export type unFollowACType = ReturnType<typeof unFollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingACType = ReturnType<typeof setIsFetching>
export type setFollowInProgressACType = ReturnType<typeof setFollowInProgress>


export type UsersPagePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    isFetching: false
}


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
        default:
            return state;
    }

}

export type  UsersReducerActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setTotalUsersCountACType | setIsFetchingACType
export type followACType = ReturnType<typeof follow>
export const follow = (userId:number) => {
    return {type: "FOLLOW", userId} as const
}
export type unFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId:number) => {
    return {type: "UNFOLLOW", userId} as const
}
export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users:Array<UserPropsType>) => {
    return {type: "SET-USERS", users} as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage:number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount:number) => {
    return {type: "SET-TOTAL-USERS-COUNT", totalUsersCount} as const
}
export type setIsFetchingACType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching:boolean) => {
    return {type: "SET-IS-FETCHING", isFetching} as const
}
export type UsersPagePropsType = {
    users: Array<UserPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1

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
            return {...state, totalUsersCount:action.totalUsersCount}
        default:
            return state;
    }

}

export type  UsersReducerActionType = followACType | unFollowACType | setUsersACType | setCurrentPageACType |
    setTotalUsersCountACType
export type followACType = ReturnType<typeof followAC>
export const followAC = (userId:number) => {
    return {type: "FOLLOW", userId} as const
}
export type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId:number) => {
    return {type: "UNFOLLOW", userId} as const
}
export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:Array<UserPropsType>) => {
    return {type: "SET-USERS", users} as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage:number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount:number) => {
    return {type: "SET-TOTAL-USERS-COUNT", totalUsersCount} as const
}
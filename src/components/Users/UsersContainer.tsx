import React from 'react';
import {connect} from "react-redux";
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserPropsType,
    UsersReducerActionType
} from "../../Redux/usersReducer";
import Users from "./Users";


const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch:(action:UsersReducerActionType)=>void) => {
    return {
        followUser: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:Array<UserPropsType>)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount/100))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)

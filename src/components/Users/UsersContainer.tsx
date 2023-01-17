import React from 'react';
import {connect} from "react-redux";

// @ts-ignore
import styles from "./Users.module.css";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <>

            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged} followUser={this.props.followUser}
                         unFollowUser={this.props.unFollowUser}/>
            }
        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
/*const mapDispatchToProps = (dispatch: (action: UsersReducerActionType) => void) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserPropsType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount / 500))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})
                    (UsersContainer)

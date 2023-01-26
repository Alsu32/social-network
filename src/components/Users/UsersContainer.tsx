import React from 'react';
import {connect} from "react-redux";
import {getUsers, setCurrentPage, setFollowUser, setIsFetching, setTotalUsersCount, setUnFollowUser, setUsers}
    from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";


class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize} currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged} followInProgress={this.props.followInProgress}
                         setUnFollowUser={this.props.setUnFollowUser} setFollowUser={this.props.setFollowUser}/>
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
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
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

export default connect(mapStateToProps, {
    setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, getUsers, setUnFollowUser, setFollowUser
})(UsersContainer)

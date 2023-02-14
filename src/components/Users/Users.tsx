import React from 'react';
// @ts-ignore
import styles from './Users.module.css'
import {UserPropsType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserPropsType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followInProgress: Array<number>
    setUnFollowUser: (userId: number) => void
    setFollowUser: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                                 className={props.currentPage === p ? styles.selectedPage : ''}> {p} </span>
                })}
            </div>
            {
                props.users.map((u: UserPropsType) => <div key={u.id} className={styles.usersPage}>
                        <div className={styles.avatarBlock}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={styles.avatar}
                                     src='https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png'/>
                            </NavLink>
                            <button disabled={props.followInProgress.some(id => id === u.id)} className={styles.follow}
                                    onClick={() => {u.followed ? props.setUnFollowUser(u.id) : props.setFollowUser(u.id)}}>
                                {u.followed ? 'UnFollow' : 'Follow'}
                            </button>
                        </div>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.nameUserBlock}>
                                <div className={styles.nameUser}> {u.name} </div>
                                < div
                                    className={styles.statusUser}> {u.status} </div>
                            </div>
                            <div
                                className={styles.locationBlock}>
                                <div className={styles.country}> Country</div>
                                <div
                                    className={styles.city}> City
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Users;
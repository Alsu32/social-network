import React from 'react';
// @ts-ignore
import styles from './Users.module.css'
import {UserPropsType} from "../../Redux/usersReducer";

type UsersPropsType = {
    users:  Array<UserPropsType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber:number)=>void
    followUser: (idUser:number)=>void
    unFollowUser: (idUser:number)=>void
}

const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p}
                        onClick={() => {props.onPageChanged(p)}}
                        className={props.currentPage === p ? styles.selectedPage : ''}> {p} </span>
                    })}
            </div>
            {
                props.users.map((u: UserPropsType) => <div key={u.id}
                                                           className={styles.usersPage}>
                        <div className={styles.avatarBlock}>
                            <img className={styles.avatar}
                                 src='https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png'/>
                            <button onClick={() => {
                                u.followed ? props.unFollowUser(u.id) : props.followUser(u.id)
                            }}
                                    className={styles.follow}> {u.followed ? 'Follow' : 'Unfollow'} </button>
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
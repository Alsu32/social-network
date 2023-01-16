import React from 'react';
// @ts-ignore
import styles from './Users.module.css'
import axios from 'axios'
import {UserPropsType} from "../../Redux/usersReducer";


class Users extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span key={p} onClick={()=>{this.onPageChanged(p)}}
                                 className={this.props.currentPage === p ? styles.selectedPage: ''}> {p} </span>
                })}
            </div>
            {
                this.props.users.map((u:UserPropsType) => <div key={u.id} className={styles.usersPage} >
                        <div className={styles.avatarBlock}>
                            <img className={styles.avatar}
                                 src='https://sunmag.me/wp-content/uploads/2019/11/sunmag-002-small-avatar.png'/>
                            <button className={styles.follow}>{u.followed ? 'Follow' : 'UnFollow'}</button>
                        </div>
                        <div className={styles.descriptionBlock}>
                            <div className={styles.nameUserBlock}>
                                <div className={styles.nameUser}>{u.name}</div>
                                <div className={styles.statusUser}>{u.status}</div>
                            </div>
                            <div className={styles.locationBlock}>
                                <div className={styles.country}>Country</div>
                                <div className={styles.city}>City</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    }
}

export default Users;
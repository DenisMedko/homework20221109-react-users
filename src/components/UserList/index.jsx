import React, { Component } from 'react';
import User from '../User';
import {usersArray} from '../../data/usersData.js';

class UserList extends Component {
    state = {
        users : usersArray, 
    };
    likeHandle = (id) => {
        const newUsers = this.state.users.map(user => {
            return {...user, 
                likes: id === user.id ? user.likes + 1 : user.likes, 
                myLike : id === user.id ? true : user.myLike
            }
        });
        this.setState({...this.state, users : newUsers});
    };
    deleteHandle = (id) => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({...this.state, users : newUsers});
    };
    render() {
        const usersList = this.state.users.map(user => <User 
            key={user.id} 
            user={user}
            likeHandle = {this.likeHandle}
            deleteHandle = {this.deleteHandle}
        />);
        return (
            <div>
                {usersList}
            </div>
        );
    }
}

export default UserList;

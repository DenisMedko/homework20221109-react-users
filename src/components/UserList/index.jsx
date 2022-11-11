import React, { Component } from 'react';
import User from '../User';
import {usersArray} from '../../data/usersData.js';

class UserList extends Component {
    state = {
        users : usersArray, 
    };

    deleteHandle = (id) => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({...this.state, users : newUsers});
    };
    
    render() {
        const usersList = this.state.users.map(user => <User 
            key={user.id} 
            user={user}
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

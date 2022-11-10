import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
    state = {
        users : [
            {id: 1, firstName : 'Denys', lastName : 'Medko', likes : 99, myLike : false},
            {id: 2, firstName : 'Oksana', lastName : 'Zhukova', likes : 199, myLike : false},
            {id: 3, firstName : 'Nika', lastName : 'Medko', likes : 299, myLike : false},
            {id: 4, firstName : 'Max', lastName : 'Kornev', likes : 0, myLike : false},
            {id: 5, firstName : 'Ramzes', lastName : 'The Second', likes : 599, myLike : false},
        ], 
    };
    likeHandle = (id) => {
        const newUsers = this.state.users.map(user => {
            return {...user, 
                likes: id === user.id ? ++user.likes : user.likes, 
                myLike : id === user.id ? user.myLike = true : user.myLike
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

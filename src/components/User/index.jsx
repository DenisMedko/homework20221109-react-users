import React, { Component } from 'react';
import UserInfo from '../UserInfo';
import LikesDisplay from '../LikesDisplay';
import LikesBtn from '../LikesBtn';
import DeleteBtn from '../DeleteBtn';
import { usersLikesArray, myLikesArray } from '../../data/usersData';

class User extends Component {
    state = {
        likes : usersLikesArray.filter(likes => likes.userId === this.props.user.id)[0].likes || 0,
        myLike : myLikesArray.filter(myLikes => myLikes.userId === this.props.user.id)[0].myLike || false, 
    };
    likeHandle = () => {
        this.setState({
            ...this.state, 
            likes : this.state.likes + 1,
            myLike : true,
        });
    };
    render() {
        const {
            user : {
                id, 
                firstName = 'no first name', 
                lastName = 'no last name',
            },
            deleteHandle = () => {}
        } = this.props;
        const {likes} = this.state;
        
        return (
            <div>
                <UserInfo firstName={firstName} lastName={lastName} />
                <LikesDisplay likes={likes} />
                <LikesBtn likeHandle={this.likeHandle} myLike={this.state.myLike} /> 
                <DeleteBtn userId={id} deleteHandle={deleteHandle} />    
            </div>
        );
    }
}

export default User;

// const User = (props) => {
//     const {
//         user : {
//             id, 
//             firstName = 'no first name', 
//             lastName = 'no last name',
//             likes = 0,
//             myLike = false
//         },
//         likeHandle = () => {},
//         deleteHandle = () => {}
//     } = props;
//     return (
//         <div>
//             <UserInfo firstName={firstName} lastName={lastName} />
//             <LikesDisplay likes={likes} />
//             <LikesBtn userId={id} likeHandle={likeHandle} myLike={myLike} /> 
//             <DeleteBtn userId={id} deleteHandle={deleteHandle} />    
//         </div>
//     );
// }

//export default User;

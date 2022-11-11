import React, { Component } from 'react';
import UserInfo from '../UserInfo';
import LikesDisplay from '../LikesDisplay';
import LikesBtn from '../LikesBtn';
import DeleteBtn from '../DeleteBtn';

class User extends Component {
    
    render() {
        const {
            user : {
                id, 
                firstName = 'no first name', 
                lastName = 'no last name',
                likes = 0,
                myLike = false
            },
            likeHandle = () => {},
            deleteHandle = () => {}
        } = this.props;
        return (
            <div>
                <UserInfo firstName={firstName} lastName={lastName} />
                <LikesDisplay likes={likes} />
                <LikesBtn userId={id} likeHandle={likeHandle} myLike={myLike} /> 
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

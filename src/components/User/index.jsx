import React from 'react';
import UserInfo from '../UserInfo';
import LikesDisplay from '../LikesDisplay';
import LikesBtn from '../LikesBtn';
import DeleteBtn from '../DeleteBtn';

const User = (props) => {
    const {
        user : {
            id, 
            firstName, 
            lastName,
            likes = 0,
            myLike = false
        },
        likeHandle = () => {},
        deleteHandle = () => {}
    } = props;
    return (
        <div>
            <UserInfo firstName={firstName} lastName={lastName} />
            <LikesDisplay likes={likes} />
            <LikesBtn myLike={myLike} id={id} likeHandle={likeHandle} /> 
            <DeleteBtn id={id} deleteHandle={deleteHandle} />    
        </div>
    );
}

export default User;

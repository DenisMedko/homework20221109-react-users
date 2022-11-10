import React from 'react';

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
            {firstName} {lastName} likes : {likes}
            <button disabled={myLike} onClick={()=>likeHandle(id)}>Like</button>
            <button onClick={()=>deleteHandle(id)}>Delete</button>     
        </div>
    );
}

export default User;

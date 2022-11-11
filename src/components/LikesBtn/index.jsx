import React from 'react';

const LikesBtn = (props) => {
    const {myLike, userId, likeHandle} = props;
    return (
        <button disabled={myLike} onClick={()=>likeHandle(userId)}>Like</button>
    );
}

export default LikesBtn;

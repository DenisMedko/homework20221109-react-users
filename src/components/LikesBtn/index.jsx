import React from 'react';

const LikesBtn = (props) => {
    const {myLike, id, likeHandle} = props;
    return (
        <button disabled={myLike} onClick={()=>likeHandle(id)}>Like</button>
    );
}

export default LikesBtn;

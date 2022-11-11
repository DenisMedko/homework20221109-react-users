import React from 'react';

const LikesBtn = (props) => {
    const {myLike, likeHandle} = props;
    return (
        <button disabled={myLike} onClick={likeHandle}>Like</button>
    );
}

export default LikesBtn;

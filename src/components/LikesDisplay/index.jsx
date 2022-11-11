import React from 'react';

const LikesDisplay = (props) => {
    const {likes} = props;
    return (
        <>
            likes : {likes}
        </>
    );
}

export default LikesDisplay;

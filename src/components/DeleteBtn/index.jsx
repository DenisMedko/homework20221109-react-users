import React from 'react';

const DeleteBtn = (props) => {
    const {userId, deleteHandle} = props;
    return (
        <button onClick={()=>deleteHandle(userId)}>Delete</button> 
    );
}

export default DeleteBtn;

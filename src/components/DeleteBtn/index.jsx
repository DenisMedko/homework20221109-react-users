import React from 'react';

const DeleteBtn = (props) => {
    const {id, deleteHandle} = props;
    return (
        <button onClick={()=>deleteHandle(id)}>Delete</button> 
    );
}

export default DeleteBtn;

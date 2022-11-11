import React from 'react';

const UserInfo = (props) => {
    const {firstName, lastName} = props;
    return (
        <>
            {firstName} {lastName}    
        </>
    );
}

export default UserInfo;

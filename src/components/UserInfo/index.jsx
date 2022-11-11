import React from 'react';

const UserInfo = (props) => {
    const {firstName, lastName} = props;
    return (
        <div>
            {firstName} {lastName}    
        </div>
    );
}

export default UserInfo;

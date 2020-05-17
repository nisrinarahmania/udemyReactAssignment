import React from 'react';

const UserOutput = props => {
    return (
        <div>
            <p>{props.children}</p>
            <h2>{props.content}</h2>
        </div>
    )
}

export default UserOutput;
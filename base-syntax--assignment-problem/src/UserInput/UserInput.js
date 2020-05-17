import React from 'react';

const UserInput = props => {
    return (
        <div>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.content} />
        </div>
    )
}

export default UserInput;
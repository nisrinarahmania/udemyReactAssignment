import React from 'react';

const charComponent =(props) =>{

const style = {
    display: 'inline-block', 
    padding: '16px',
    margin: '16px', 
    border: '1px solid black'
}

    return(
        <div style={style}>
            <p onClick = {props.deleteText}>
                {props.text}
                </p>
        </div>
    )

}

export default charComponent;
import React from 'react';

const validationComponent = (props) => {

    let validationText = null;
    
    if (props.textLenght <= 4) {
      validationText = "Text too short";
    }
    if(props.textLenght == null){
      validationText = "You haven't entered anythig";
    }

    return(
        <div>
        <p>{validationText}</p>
        </div>
    )
}

export default validationComponent;
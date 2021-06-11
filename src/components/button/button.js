import React from "react";

import './button.scss';

const Button = ({children, ...otherProps}) =>{
    return(
    <button className={`${isGoogleSi}`}"custom-button" {...otherProps}>
        {children}
    </button>
    )
}

export default Button;
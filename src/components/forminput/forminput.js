import React from 'react';
import './forminput.scss';

const FormInput = ({handleChange, label, placeholder, ...otherProps}) => {
    return(
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} label={label} placeholder={placeholder}></input>  
    </div>
    )
}

export default FormInput;
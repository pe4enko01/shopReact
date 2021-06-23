import React from 'react';

import Button from '../button/button'

import './card-dropdown.scss'

const CardDropdown = () => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <Button>Go TO HECKOUT</Button>
        </div>
    )
}

export default CardDropdown;
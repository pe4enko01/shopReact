import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../accets/shopping-bag.svg';

import './card-icon.scss';

const CardIcon = () => {
    return(
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'></span>
    </div>
    )
}
export default CardIcon;
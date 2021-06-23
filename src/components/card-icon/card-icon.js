import React from 'react';
import  {connect} from "react-redux";
import  {toggleCartHidden } from "../../redux/card/card.action";
import { ReactComponent as ShoppingIcon } from '../../accets/shopping-bag.svg';

import './card-icon.scss';

const CardIcon = ({toggleCartHidden}) => {
    return(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
    )
}

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchProps) (CardIcon);
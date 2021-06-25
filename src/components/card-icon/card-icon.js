import React from 'react';
import  {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';
import  {toggleCartHidden } from "../../redux/card/card.action";
import { seletCartItemsCount } from '../../redux/card/card.selector';
import { ReactComponent as ShoppingIcon } from '../../accets/shopping-bag.svg';

import './card-icon.scss';

const CardIcon = ({toggleCartHidden, itemCount}) => {
    return(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
    )
}

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps =createStructuredSelector({
    itemCount: seletCartItemsCount
})

export default connect(mapStateToProps, mapDispatchProps) (CardIcon);
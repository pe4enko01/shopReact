import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/card/card.selector';
import CheckoutItem from '../../components/checkjut-item/checkjut-item';

import './checkout.scss';

const Checkout = ({cartItems, total}) =>{
    return(
        <div className="checkout-page">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quntity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {   
                cartItems.map(cartItem => cartItem.name)
            }
            <div className='total'>
                <span>TOTAL : ${total}</span>
            </div>
            <CheckoutItem/>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, 
    total: selectCartTotal
})
export default connect(mapStateToProps)(Checkout)
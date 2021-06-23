import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../../fierbase/fierbase.utils";
import {connect} from 'react-redux';
import CardIcon from "../card-icon/card-icon";
import CardDropdown from '../card-dropdown/card-dropdown';
import "./header.scss";
import {ReactComponent as Logo} from '../../ass/crown.svg';

const Header = ({currentUser, hidden}) => {
    return(
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CardIcon/>
            </div>
            {
                hidden ? null :
            <CardDropdown/>
            }
        </div>
    )
};


const mapStateToProps = ({user : {currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
import React from "react";
import Button from "../button/button";
import {connect} from 'react-redux';
import { addItem } from "../../redux/card/card.action";


import "./colection-item.scss";

const CollectionItem = ({item, addItem}) =>{
    const {name, price, imageUrl} = item;
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div >
        <Button onClick = {()=>{addItem(item)}} inverted >
            Add to card
        </Button>
    </div>
    )
}

const mapDispatchProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchProps)(CollectionItem);
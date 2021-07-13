import React from 'react';
import colectionItem from '../../components/colection-item/colection-item';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/colection-item/colection-item';
import './collection.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    console.log("Fdsfd");
    
    return(
        <div className="collection-page">
            <h2 className='title'>{ title } fdsjkldjkls</h2>
            <div className="items">
                 {items.map(item => (<CollectionItem key = {items.id} item={item}/>))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.parems.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
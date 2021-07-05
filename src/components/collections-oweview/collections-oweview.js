import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Previewcollection from '../preview-collection/previewcollection';
import {selectItems} from '../../redux/shop/shop.selector';
import './collections-oweview.scss';

const CollectionOverView = ({collections}) => (
    <div className='collections-oweview'>
         {
                collections.map((col) =>(
                    <Previewcollection key={col.id} title={col.title} items={col.items} />
                ))
                }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectItems
})

export default connect(mapStateToProps)(CollectionOverView)
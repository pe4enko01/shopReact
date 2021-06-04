import React from "react";
import SHOP_DATA from './shop.data';
import Previewcollection from '../../components/preview-collection/previewcollection';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA
        }
    }


    render(){
        const {collection} = this.state;
        return (
            <div className = 'shop-page'>
                {
                collection.map((col) =>(
                    <Previewcollection key={col.id} title={col.title} items={col.items} />
                ))
                }
            </div>
        )
    }
}

export default ShopPage;
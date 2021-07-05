import React from "react";
import { Route } from 'react-router-dom';
//import Previewcollection from '../../components/preview-collection/previewcollection';
import CollectionsOweview from "../../components/collections-oweview/collections-oweview";

const ShopPage = ({match}) => {

        return (
            <div className = 'shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOweview} />
            </div>
        )
    
}



export default ShopPage;
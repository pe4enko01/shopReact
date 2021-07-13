import React from "react";
import { Route } from 'react-router-dom';

//import Previewcollection from '../../components/preview-collection/previewcollection';
import CollectionsOweview from "../../components/collections-oweview/collections-oweview";
import CollectionPage from "../collection/collection";

const ShopPage = ({match}) => {

        return (
            <div className = 'collection-page'>
                <Route exact path={`${match.path}`} component={CollectionsOweview} />
                <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    
}

export default ShopPage;
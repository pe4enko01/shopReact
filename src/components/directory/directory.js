import React from 'react';

import MenuItem from '../menu-item/menu-item.js';
import { selectDirectorySection } from '../../redux/directory/directory.selector.js';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
//import {withRouter} from 'react-router-dom';
import './directory.scss'


const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {
                    sections.map(({title, imageUrl, id, size, linkUrl})=>(
                        <MenuItem key={id} title={title} imageUrl = {imageUrl} size = {size}  linkUrl={linkUrl} />
                    ))
                }
            </div>
        )
    
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);
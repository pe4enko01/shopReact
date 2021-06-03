import React from "react";
import React from 'react'


import './previewcollection'

const Previewcollection = ({title, items})=>{
    return(
        <div className="collection-preview">
            <hi className="title">{title.toUpperCase()}</hi>
            <div className="preview">
                {
                    items.map((item)=>(
                        <div key = {item.id}>{imem.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
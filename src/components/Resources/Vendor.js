import React from 'react';
import "./style.css"

const Vendor = (props) => {

    return(
        <div className='vendor-block'>
            <span>{props.name || 'N/A'}</span>
            <span>{props.status || 'N/A'}</span>
        </div>
    )
}

export default Vendor;
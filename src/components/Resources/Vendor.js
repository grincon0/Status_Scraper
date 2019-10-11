import React from 'react';
import "./style.css"

const spanStyleLeft ={
    paddingLeft: '30px'
}

const spanStyleRight = {
    paddingRight: '30px'
}

const Vendor = (props) => {

    return (
        <div className='vendor-block'>
                <span style={spanStyleLeft}>{props.name || 'N/A'}</span>
                <span style={spanStyleRight}>{props.status || 'N/A'}</span>
            
        </div>
    )
}

export default Vendor;
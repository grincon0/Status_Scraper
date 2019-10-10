import React from 'react';



const Wrapper = (props) => {

    return(
        <div style={wrapperStyle}>
            {props.children}
        </div>
    )
}

const wrapperStyle = {
    height: '100vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '960px'

    
}

export default Wrapper;
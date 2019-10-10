import React from 'react';


const Header = () => {

    const headerStyle = {
        background: 'linear-gradient(90deg, rgba(0,255,252,1) 0%, rgba(8,210,222,1) 21%, rgba(31,255,0,1) 100%)',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '8%'
        
    }
    return(
        <header style={headerStyle}>
            <p>Status Report</p>
        </header>
    )
}

export default Header;
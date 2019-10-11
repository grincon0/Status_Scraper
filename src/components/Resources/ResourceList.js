import React from 'react';

const sectionStyle= {
    backgroundColor:'#f5ffff',
    border: '1px solid #b0ffff',
    borderRadius: '8px',
    marginBottom: '15px',
    marginTop: '15px'

}

const headerStyle = {
    paddingLeft: '20px',
    fontWeight: '700'
}


const ResourceList = (props) => {
    return(
        <section style={sectionStyle}>
            <h1 style={headerStyle}>{props.name}</h1>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default ResourceList;
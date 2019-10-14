import React, {useEffect} from 'react';
import Vendor from './Vendor';

const sectionStyle= {
    backgroundColor:'#f5ffff',
    border: '1px solid #b0ffff',
    borderRadius: '8px',
    marginBottom: '15px',
    marginTop: '40px'
}

const headerStyle = {
    paddingLeft: '20px',
    fontWeight: '700',
    fontSize: '50px'
}


const ResourceList = React.memo(props => {
    return(
        <section style={sectionStyle}>
            <h1 style={headerStyle}>{props.name}</h1>
            <div>
             {/*    {props.vendorList && props.vendorList.map( ven => {
                   <div>
                       <h1>TEST</h1>
                     <Vendor name={ven.name} status={ven.status} />
                    </div>
                })} */}
                {props.children}
            </div>
        </section>
    )
});

export default ResourceList;
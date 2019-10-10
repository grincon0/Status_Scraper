import React, {useReducer, useCallback, useMemo} from 'react';
import Vendor from '../components/Resources/Vendor';

/* const statusReducer = () => {

} */



const Status = () => {

    //const [statusState, dispatch] = useReducer()

    return(
        <div style={containerStyle}>
            <Vendor
            name={'This is a test'}
            status={'ALL SYSTEMS ARE GO!'}
            />
        </div>

    )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '87%',
    backgroundColor: 'black'
}

export default Status;
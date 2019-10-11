import React, {useReducer, useCallback, useEffect, useMemo} from 'react';
import Vendor from '../components/Resources/Vendor';
import ResourceList from '../components/Resources/ResourceList';
import useScraper from '../utils/Scraper';

const statusReducer = (currentVendors, action) => {
    switch (action) {
        case 'ADD':
            return [...currentVendors, action.vendor];
    
        default:
            throw new Error('Should not go here');
    }
} 

const Status = () => {

    const [statuses, dispatch] = useReducer(statusReducer, []);
    const {scrape, scraperData} = useScraper();

    useEffect(() => {
        console.log(scraperData);
        if(scraperData.length > 0){
            dispatch({type: 'ADD',  vendor: scraperData });
        }
    }, [scraperData])

    const scrapeIterable = useCallback(() => {
        scrape();
    }, [scrape]);

    return(
        <div style={containerStyle}>


        
            
            <ResourceList name={'Iterable'}>
            <Vendor
            name={'This is a test'}
            status={'ALL SYSTEMS ARE GO!'}
            />
            </ResourceList>

            <button style={buttonStyle} onClick={scrapeIterable}>Scrape</button>
            
        </div>

    )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '87%'
}

const buttonStyle = {
    width: '120px',
    height: '30px',
    backgroundColor: '#09add6',
    borderRadius: '9px',
    border: '0',
    color: 'white',
    fontSize: '16px'

}

export default Status;
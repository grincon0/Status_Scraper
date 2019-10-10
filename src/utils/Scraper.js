import { useReducer, useCallback } from 'react';

import axios from 'axios';
import cheerio from 'cheerio';

const initialArray = [];

const scraperReducer = (currentState, action) => {
    switch (action.type) {
        case 'RESPONSE':
            return action.response;
        case 'CLEAR':
            return initialArray;
    }
}


const useScraper = () => {

    const [scraperState, dispatchScraper] = useReducer(scraperReducer, initialArray);

    const scrape = useCallback(() => {
        axios.get("https://status.iterable.com")
        .then((response) => {
            const $ = cheerio.load(response.data);
            return $;
        }).then(($) => {
            let tempArray = [];
            $('.container-component').each((i, elem) => {
                let result = {};

                result.name = $(elem).find('span.name').text();
                result.status = $(elem).attr('data-component-status');
                
                if(result.status === 'operational'){
                    result.isLive = true;

                }else{
                    result.isLive = false;
                }


                tempArray.push(result);
            }).then(() => {
                console.log(tempArray);
                dispatchScraper({ type: 'RESPONSE', response: tempArray })
            })
        }).catch(error => {
            console.log(error);
        })
    }, []);

    return {
        scrapedArray: scrapedArray,
        scrape: scrape
    }
}



export default useScraper;

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

    const stringToArray = (string) => {
        return string.replace(/\s\s+/g, '').split(" ");
   }


    const scrape = useCallback(() => {
        axios.get("https://status.iterable.com")
            .then((response) => {
                console.log(response.data);
                const $ = cheerio.load(response.data);
                /* const test = $('.component-inner-container');
                const output = test.find('span').text();

                const outputArray = stringToArray(output);
 */

                $('.border-color').each((i, elem) => {
                    const outputName = $(elem).find('.name').text();
                    
                    const serviceName = stringToArray(outputName);
                    const serviceStatus = $(elem).find('.component-inner-container').attr('data-component-status');

                    console.log('service',serviceName);
                    console.log('status', serviceStatus);
                })


                console.log(outputArray);
                return $;
            }).then(($) => {

              
                let tempArray = [];
                $('.container-component').each((i, elem) => {
                    console.log(elem);


                    let result = {};

                    result.name = $(elem).find('span.name').text();
                    result.status = $(elem).attr('data-component-status');

                    if (result.status === 'operational') {
                        result.isLive = true;

                    } else {
                        result.isLive = false;
                    }
                    console.log(result);
                    tempArray.push(result);
                })

                console.log(tempArray);
                dispatchScraper({ type: 'RESPONSE', response: tempArray })

            }).catch(error => {
                console.log(error);
            })
    }, []);

    return {
        scraperData: scraperState,
        scrape: scrape
    }
}



export default useScraper;

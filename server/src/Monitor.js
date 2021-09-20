const { getAll }    = require('../controllers/items-controller');
const { parse }     = require('./Scrape');
const axios         = require('axios');

// constructor
class Monitor{
    constructor() {
        this.scraping = false;
    }

    async startScraping() {
    
        const allProducts = await getAll();
    
        const requests = [];
        allProducts.forEach(obj => {
            requests.push(axios.get(obj.url));
        });
    
        await Promise.all(requests).then(axios.spread((...response) => {
            
            response.forEach(item => {
                const parsedData = parse(item.data);

                // continue here
            })
        }))
    }
}


module.exports = Monitor;
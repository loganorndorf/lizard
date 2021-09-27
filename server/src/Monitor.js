const { getAll, updateItem }    = require('../controllers/items-controller');
const { parse }     = require('./Scrape');
const { notify }    = require('./Notification');
const axios         = require('axios');

// constructor
class Monitor{
    constructor() {
        this.scraping = false;
        this.scrapePeriod = 25000; //ms
        this.error = false;
    }

    toggle() {
        if(!this.error) {
            this.scraping = !this.scraping;
        } else {
            this.error = false;
        }

        if(this.scraping) {
            this.startScraping();
        }
    }

    async startScraping() {
    
        if(!this.scraping) return;
        console.log("...scraping...");

        const allProducts = await getAll(); //from db - has all info we need

        const requests = [];
        allProducts.forEach(obj => {
            requests.push(axios.get(obj.url));
        });
    
        await Promise.all(requests).then(axios.spread((...response) => {
            response.forEach(async (item, index) => {
                const parsedData = parse(item.data);

                
                const diffs = checkNewValues(parsedData, allProducts[index]);
                
                // since we gotta check everytime anyways, we'll only update our info when we have to
                // -- how will the above work with caching...?
                if(diffs.notifRequired) {
                    const updated = await updateItem(
                        {url: allProducts[index].url},
                        diffs.newInfo
                    )

                    notify(updated);
                }
            })
        }))
        .catch(err => {
            this.scraping = false;
            this.error = true;
            // TODO: should return an object to force stop on the front end
        })

        setTimeout(() => {
            if(this.scraping) this.startScraping();
        }, this.scrapePeriod)
    }
}

const checkNewValues = (newData, originalData) => {
    const notifRequired = false;
    const newInfo = {};

    Object.entries(newData).forEach((key, value) => {
        if(originalData[key] !== value){
            newInfo[key] = value;
            if(
                (key === 'price' && originalData[key] > value) || 
                (key === 'inStock' && value) 
            ) 
            notifRequired = true; 
        }
    })

    return {
        notifRequired,
        newInfo
    }
}


module.exports = Monitor;
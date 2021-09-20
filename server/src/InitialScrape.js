const axios = require('axios');
const cheerio = require('cheerio');

const init = async(url) => {
    const pageData = await axios.get(url);
    const $ = cheerio.load(pageData);

   
    const title = $("head > title");
    console.log(title);
    

    return {};
}


module.exports = {
    init: init
}

// we want to grab:
// - title
// - description
// - lastUpdated
// - price
// - stock
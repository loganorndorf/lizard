const axios = require('axios');
const cheerio = require('cheerio');

const scrape = async(url) => {
    const pageData = await axios.get(url)
        .catch(error => {
            console.log("ERRROR");
            return {};
        });

    
    const parsedData = parse(pageData.data);
    parsedData['url'] = url;

    return parsedData;
}

const parse = html => {
    const $ = cheerio.load(html);
    const data = {};
    
    data['title'] = $("head > meta[property='og:title']").attr("content");
    data['price'] = $(".priceView-hero-price > span[aria-hidden]").text();
    data['imageUrl'] = $("head > meta[property='og:image']").attr("content");
    data['inStock'] = $(".add-to-cart-button").text() == 'Add to Cart' ? true : false;

    console.log(data);
    return data;
}


module.exports = {
    scrape,
    parse
}

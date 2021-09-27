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
    return {
        'title': $("head > meta[property='og:title']").attr("content"),
        'price': $(".priceView-hero-price > span[aria-hidden]").text(),
        'imageUrl': $("head > meta[property='og:image']").attr("content"),
        'inStock': $(".add-to-cart-button").text() == 'Add to Cart' ? true : false
    }
}


module.exports = {
    scrape,
    parse
}

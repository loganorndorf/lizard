const axios = require("axios");
const controller = require("./server/controllers/items-controller");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const server = require("./server");

chai.use(chaiHttp);
chai.request(server);

describe("Database Controller Tests", () => {
    it("Should add a single document into database", done => {
        
        controller.createItem({
            'url': "www.bestbuy.com",
            'title': "Best Buy Website",
            'price': "$00.00",
            'imageUrl': "www.bestbuy.com/imageUrl",
            'inStock': false
        })
        .then(res  => {
            expect(res).to.have.property('inStock'); // if it does not have this property, it returned an error obj
            done();
        })
        
    });
    it("Should alert user for re-adding the same item to monitor", done => {
        controller.createItem({
            'url': "www.bestbuy.com",
            'title': "Best Buy Website",
            'price': "$00.00",
            'imageUrl': "www.bestbuy.com/imageUrl",
            'inStock': false
        })
        .catch(err => {
            console.log(err);
            expect(err.message).to.equal("Item already exists"); 
            done();
        })
    })
    // it("Should delete all Items documents in database", done => {
    //     controller.deleteAll()
    //     .then(() => {
    //         controller.getAll()
    //         .then(res => {
    //             // console.log(res);
    //             expect(db.length).to.be.false;
    //             done();
    //         })
    //     })
    
    // })
})
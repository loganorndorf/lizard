const Items = require('../models/items-model');

module.exports.deleteAll = async(req, res) => {
    Items.deleteMany({}, (err) => {
        if(err) throw err;
    });
}

module.exports.createItem = async(req, res) => {

    const existingItem = await Items.findOne({url: req.url});
    if(!existingItem) {
        const newItem = new Items(req);
        const savedItem = await newItem.save();
        return savedItem;
    }
}

module.exports.deleteItem = async(req, res) => {
    const { productUrl } = req.body;
    const deleted = Items.findOneAndDelete({productUrl});
    if(deleted) {
        return deleted;
    } 
}

// will be used by 
module.exports.getAll = async(req, res) => {
    const allItems = Items.find({});
    return allItems;
}

// will be done internally. User won't be allowed to change data after initial link submission
module.exports.updateItem = async() => {

}




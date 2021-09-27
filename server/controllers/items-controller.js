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
    } else {
        return Error({
            code: 500,
            message: "Item already exists"
        });
    }
}

module.exports.deleteItem = async(req, res) => {
    const { productUrl } = req.body;
    const deleted = Items.findOneAndDelete({productUrl});
    if(deleted) {
        return deleted;
    } 
}

module.exports.getAll = async(req, res) => {
    const allItems = await Items.find({});
    return allItems;
}

module.exports.updateItem = async(query, newData) => {
    const updated = await Items.findOneAndUpdate(query, newData);
    return updated;
}




const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ItemSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    }, 
    price: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    inStock: {
        type: Boolean,
        required: false
    }
});


module.exports = mongoose.model('Item', ItemSchema);
// We might have more to add in the future
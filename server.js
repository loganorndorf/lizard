const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const cors      = require('cors');
const path      = require('path');

const Monitor   = require('./src/Monitor');
const lizard    = new Monitor();

// APP CREATION
const app = express();
const port = process.env.PORT || 3000;

// CONTROLLER
const { deleteAll, createItem, getAll, deleteItem } = require('./controllers/items-controller');
const { scrape } = require('./src/Scrape');

// db connection
mongoose.connect('mongodb://localhost:27017/best-buy', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    deleteAll();
})

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send("Welcome To the Best Buy Monitor.");
})

app.post('/item', async(req, res) => {
    const { url } = req.body;
    const fullItem = await scrape(url);

    const { id, title, price, imageUrl, inStock} = await createItem(fullItem);
    res.send({
        id,
        url,
        title,
        price,
        imageUrl,
        inStock
    });
})

app.get('/item', async(req, res) => {
    const allItems = await getAll();

})

app.delete('/item/:productUrl', async(req, res) => {
    const { productUrl } = req.params;
    const deleted = await deleteItem({productUrl});
})

// toggle monitor on/off
app.post('/toggle', (req, res) => {
    console.log(req.body);
    lizard.startScraping();
})


app.listen(port, () => {
    console.log(`Best Buy Monitor running on ${port}.`);
})


/* Things I want to do more research on:
    - app.set() VS app.use() --> also, what are their roles in routing??
    - app.engine() options

    - path.join(__dirname, directory)

    Angular tings:
    - Directives
    - Modules
    - Decorators
    - Components
    - Services
    - Dependency injection
    - Pipes, and Templates
*/
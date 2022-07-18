const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
const cors = require('cors');



app.use('/static', express.static(path.join(__dirname + '/static')));
app.use(cors())
app.get('/', (req, res) => {
    return res.json('app is running')
})

app.get('/products', (req, res) => {
    let rawdata = fs.readFileSync(`${__dirname}/server/products/index.get.json`);
    return res.json(JSON.parse(rawdata));
})
app.get('/banners', (req, res) => {
    let rawdata = fs.readFileSync(`${__dirname}/server/banners/index.get.json`);
    return res.json(JSON.parse(rawdata));
})

app.get('/categories', (req, res) => {
    let rawdata = fs.readFileSync(`${__dirname}/server/categories/index.get.json`);
    return res.json(JSON.parse(rawdata));
})

app.get('/addToCart', (req, res) => {
    let rawdata = fs.readFileSync(`${__dirname}/server/addToCart/index.post.json`);
    return res.json(JSON.parse(rawdata));
})


app.listen(port, function () {
    console.log(`app is running on http://localhost:${port}/`);
});
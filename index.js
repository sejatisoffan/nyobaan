const express = require('express');
//const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
//app.use(bodyParser.json());

const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');

const sequelize = require('./configs/sequelize');

const Product = require('./models/product');

app.use(homeRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})
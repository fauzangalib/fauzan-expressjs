require('./config/mongoose');
const express = require('express');
const path = require('path')
const app = express();
const productRouterV3 = require ('./product_v3/routes');
const productRouterV4 = require ('./product_v4/routes');
const logger = require ('morgan');

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v3', productRouterV3);
app.use('/api/v4', productRouterV4);

app.listen(3000, () => console.log('Server: http://localhost:3000'))

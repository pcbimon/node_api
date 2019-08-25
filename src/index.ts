import express from 'express';
import {wiki} from './router/wiki.router';
import {product} from './router/product.router';
import { sequelize } from './models';
// Test connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
// initial ExpressJS
const app = express();

// Example Route
app.get('/', function (req:any,res:any) {
    res.send('Express API running');
});
//Route from Router File
app.use('/wiki',wiki);
app.use('/product',product);
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);

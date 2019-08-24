import express from 'express';
import {wiki} from './router/wiki.router';
// initial ExpressJS
const app = express();
//***require router***//
//const wiki = require('router/wiki.router.js');
// Example Route
app.get('/', function (req:any,res:any) {
    res.send('Express API running');
});
//Route from Router File
app.use('/wiki',wiki);
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wiki_router_1 = require("./router/wiki.router");
const product_router_1 = require("./router/product.router");
const models_1 = require("./models");
// Test connection
models_1.sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
// initial ExpressJS
const app = express_1.default();
// Example Route
app.get('/', function (req, res) {
    res.send('Express API running');
});
//Route from Router File
app.use('/wiki', wiki_router_1.wiki);
app.use('/product', product_router_1.product);
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);
//# sourceMappingURL=index.js.map
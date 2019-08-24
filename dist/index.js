"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wiki_router_1 = require("./router/wiki.router");
// initial ExpressJS
const app = express_1.default();
//***require router***//
//const wiki = require('router/wiki.router.js');
// Example Route
app.get('/', function (req, res) {
    res.send('Express API running');
});
//Route from Router File
app.use('/wiki', wiki_router_1.wiki);
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);
//# sourceMappingURL=index.js.map
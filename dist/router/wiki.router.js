"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.wiki = express_1.default();
// Home page route.
exports.wiki.get('/', function (req, res) {
    res.send('Wiki home page');
});
// About page route.
exports.wiki.get('/about', function (req, res) {
    res.send('About this wiki');
});
//module.exports = wiki;
//# sourceMappingURL=wiki.router.js.map
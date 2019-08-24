import Router from 'express';

export const wiki = Router();

// Home page route.
wiki.get('/', function (req:any, res:any) {
    res.send('Wiki home page');
});

// About page route.
wiki.get('/about', function (req:any, res:any) {
    res.send('About this wiki');
});

//module.exports = wiki;

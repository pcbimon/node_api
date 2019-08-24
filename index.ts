var express = require('express');
var app = express();

app.get('/', function (req:any,res:any) {
    res.send('Express API running');
});
console.log("App Started on http://127.0.0.1:3000");
app.listen(3000);


var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);
console.log('RESTful API server started on port: ' + port);

app.use(function (req, res, next) {

    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    
    res.setHeader('Access-Control-Allow-Credentials', true);

    
    next();
});
require('./api/routes/palindrome.routes.js')(app);

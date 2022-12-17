var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/MEAN-1', (err) =>{
    if(err){
        console.log('Not connected to DB due to ' + err);
    }
    else{
        console.log('Connected to database');
    }
})


app.listen(port, () => {
    console.log('Server running on port ' + port);
});
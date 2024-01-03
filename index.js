const express = require("express");
const app = express();
const port = 9000;
const db = require('./config/mongoose');

const passport = require('passport');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',require('./routes'));

app.listen(port,function(err) {
    if(err) {
        console.log('error');
        return;
    }
    console.log(`Server running on port ${port}`)
});
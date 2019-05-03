const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const trackRoute = require('./routes/track');

app.use(bodyParser.json);

//Logger
app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
    next();
});

app.use(trackRoute);
app.use(express.static('public'));

//404 Handler
app.use((req,res,next)=>{
    res.status(404).send('404 Not Found');
});

//500 Handler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'../public/500.html'));
});

const args = require('minimist')(process.argv.slice(2))
const port = args['port'] || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
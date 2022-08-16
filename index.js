const express = require('express');
const path = require('path');
const app = express();

const http = require('http');
const server = http.createServer(app);

app.use('/assets', express.static('./assets'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname + '/views'));


var port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.render('index');
});

server.listen(port,() => console.log('Server started on port '+port) );
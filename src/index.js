const morgan = require('morgan');
const express = require('express');
const path = require('path');
//const {exphbs} = require('express-handlebars');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./route/index');
const db = require('./config/db/index');
db.connect();
//HTTP Logger
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));
// Template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

//console.log('Path: ', path.join(__dirname, 'resources/views'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

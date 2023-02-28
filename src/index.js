const morgan = require('morgan');
const express = require('express');
const path = require('path');
//const {exphbs} = require('express-handlebars');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;

//HTTP Logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
// Template engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.get('/', (req, res) => {
  res.render('home');
})
//console.log('Path: ', path.join(__dirname, 'resources/views'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


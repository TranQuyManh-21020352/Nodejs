const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/news', newRouter);
    app.use('/site', siteRouter);
    app.use('/courses', courseRouter);

    app.use('/', siteRouter);

    //   app.post('/search', (req, res) => {
    //     res.send('');
    //   });
}

module.exports = route;

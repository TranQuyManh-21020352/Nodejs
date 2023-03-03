const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newRouter);
  app.use("/site", siteRouter);

  app.get("/", (req, res) => {
    res.render("home");
  });

  //   app.post('/search', (req, res) => {
  //     res.send('');
  //   });
}

module.exports = route;

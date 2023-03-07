const course = require('../model/courses');
const { mulMongooseToObject } = require('../../util/mongoose');
class SiteController {
    async index(req, res) {
        course
            .find({})
            .then((course) => {
                res.render('home', {
                    course: mulMongooseToObject(course),
                });
            })
            .catch((error) => {
                console.log('failed!');
            });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

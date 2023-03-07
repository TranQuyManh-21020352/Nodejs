const course = require('../model/courses');
const { mongooseToObject } = require('../../util/mongoose');
class courseController {
    show(req, res) {
        course
            .findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch((error) => {
                console.log('failed!');
            });
    }
}

module.exports = new courseController();

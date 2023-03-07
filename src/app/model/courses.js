const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    age: { type: String },
});

module.exports = mongoose.model('Courses', course);

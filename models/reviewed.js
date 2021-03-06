var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewedSchema = new Schema({
    isbn: {unique: true, type: String, required: true}, // This is unique key
    title: String,
    author: String,
    year_published: Date,
    began_date: Date,
    finished_date: Date,
    summary: String,
    notes: String,
    rating: Number,
    review: String,
    img_url: String
});

module.exports = mongoose.model('Reviewed', ReviewedSchema);

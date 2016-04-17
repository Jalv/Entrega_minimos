/**
 * Created by Joe on 15/4/16.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
var Student = mongoose.model('Student');


var subjectSchema = new Schema({
    name: {type : String},
    students:  [{  type: Schema.ObjectId, ref:"Student" }],

},{
    versionKey: false // You should be aware of the outcome after set to false (elimina __V)
});
module.exports = mongoose.model("Subject", subjectSchema);
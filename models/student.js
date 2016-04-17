/**
 * Created by Joe on 15/4/16.
 */
var mongoose = require('mongoose');
Schema   = mongoose.Schema;



var studentSchema = new Schema({

    name:       {type : String},
    address:    { type: String},
    phone:      [{
                    home : String,
                    mobile : String
                }],


}, {
    versionKey: false // You should be aware of the outcome after set to false (elimina __V)
});

module.exports = mongoose.model('Student', studentSchema);
/**
 * Created by Joe on 15/4/16.
 */

module.exports = function (app) {

    var mongoose = require('mongoose');
    var Student = require('../models/student.js');

    addStudent = function (req, res) {
        console.log();
        var student = new Student({
            name: req.body.name,
            address: req.body.address,
            phone: [{home:345,mobile:555}],
        });

        student.save(function (err, student) {
            if (err) return res.send(500, err.message);
            res.status(200).json(student);

        });
    };

    allStudents = function (req, res) {
        Student.find(function (err, students) {
            if (err) res.send(500, err.message);

            console.log('GET /students');
            console.log(students);
            res.status(200).json(students);
        });
    };

    findStudent = function(req,res){
        Student.findOne({name: req.params.name},function(err,student){
            if (err) res.send(404,err.message);

            console.log(student);
            res.status(200).json(student);
        });
    }

    //endpoints
    app.post('/students/',addStudent);
    app.get('/students/',allStudents);
    app.get('/students/:name',findStudent);
}
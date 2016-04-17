/**
 * Created by Joe on 15/4/16.
 */
module.exports = function (app) {

    var mongoose = require('mongoose');
    var Student = require('../models/student.js');
    var Subject = require('../models/subject.js');

    addSubject = function(req,res) {
        var subject = new Subject({
            name: req.body.name,
            students:[],
        });

        subject.save(function (err, subject) {
            if (err) return  console.log("ERROR");//res.send(500, err.message);
            res.status(200).json(subject);

        });
    }

    //PUT - Add student in a subject
    addStudentToSubject = function (req, res) {

        console.log('POST');
        console.log(req.params.name);
        console.log(req.params.student_name);
        console.log('test');
        Student.findOne({name: req.params.student_name},function(err,student){
            if(err) return err.message("ERROR");
            else {
                console.log(student);
                console.log(student.name);
                console.log(student._id);

                Subject.findOneAndUpdate({name: req.params.name}, {$push: {students: student._id}}, function (err, result) {
                    console.log(result);
                    res.send(result);

                });
            }
        });



    };


    allSubjects = function (req, res) {
        Subject.find(function (err, subjects) {
            if (err) res.send(500, err.message);
            Student.populate(subjects,{path: "students"},function(err,subjects){
                console.log('GET /subjects');
                console.log(subjects);
                res.status(200).json(subjects);
            });

        });
    };

    findSubject = function (req, res) {
        Subject.findOne({name:req.params.name},function (err, subjects) {
            if (err) res.send(500, err.message);
            Student.populate(subjects,{path: "students"},function(err,subjects){
                console.log('GET /subjects');
                console.log(subjects);
                res.status(200).json(subjects);
            });

        });
    };



    //endpoints
    app.post('/subjects/',addSubject);
    app.get('/subjects/',allSubjects);
    app.get('/subjects/:name',findSubject);
    app.put('/subjects/:name/:student_name',addStudentToSubject);
}
/**
 * Created by Joe on 15/4/16.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/student', {
            templateUrl : 'student.html',
            controller  : 'studentController'
        })

        // route for the contact page
        .when('/subjects', {
            templateUrl : 'subject.html',
            controller  : 'subjectController'
        })
        .when('/subject/:name/detail', {
            templateUrl: 'detail.html',
            controller: 'detailController'
        })
        .when('/student/:name/detail', {
            templateUrl: 'userdetail.html',
            controller: 'userdetailController'

        });
});


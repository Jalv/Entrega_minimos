/**
 * Created by Joe on 15/4/16.
 */

angular.module('myApp').controller('studentController',function($scope,$http){




    $scope.addToSubject = function(){

        console.log('/subjects/'+ $scope.subject.name+'/'+$scope.student.name);
        $http.put('/subjects/'+ $scope.subject.name+'/'+$scope.student.name,null).success(function (response){

            console.log('OK');

        })

    };

});

angular.module('myApp').controller('subjectController',function($scope,$http,$routeParams) {


    function getSubjects(){
        $http.get('/subjects/').success(function (response) {

            console.log("i got the data I requested");
            console.log($scope.subjects);
            $scope.subjects = response;
            $scope.subject = "";

        });

    };

    getSubjects();



});

angular.module('myApp').controller('detailController',function($scope,$http,$routeParams) {


    console.log("Estoy dentro del controller");
    getSubject= function(){
        console.log('/subjects/'+ $routeParams.name);
        $http.get('/subjects/'+ $routeParams.name).success(function (response) {

            console.log("i got the data I requested");
            var res = JSON.stringify(response);
            console.log(response);
            console.log(res[5]);
            console.log(response.students);
            $scope.subject = response;
            $scope.students=response.students;
            $scope.student="";





        });

    };

    getSubject();

});

angular.module('myApp').controller('userdetailController',function($scope,$http,$routeParams) {


    console.log("Estoy dentro del controller");
    getStudent = function () {
        console.log('/students/' + $routeParams.name);
        $http.get('/students/' + $routeParams.name).success(function (response) {

            console.log("i got the data I requested");
            console.log(response);
            console.log(response.phone[0].home);
            $scope.student = response;
            $scope.home = response.phone[0].home;
            $scope.mobile= response.phone[0].mobile;



        });

    };

    getStudent();

});



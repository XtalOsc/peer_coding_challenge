console.log('js');

var myApp = angular.module('myApp', []);

var allYourSuperHeros= [];

myApp.controller('newStudent',['$scope', '$http',function($scope,$http){
console.log('NG');

$scope.addNewStudent = function(){

var newStudent ={
  assignment_number: $scope.assignmentNumber,
  student_name: $scope.studentName,
  score: $scope.studentScore,
  date_completed: $scope.completedDate
};//end newStudent object to send

$http({
method: 'POST',
url: '/create',
data: newStudent

}).then(function(response){
  console.log('back from server sir ', response);
});
};//end add super hero scope


}]);//end myApp controller

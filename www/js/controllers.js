angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SpeakersCtrl', function($scope, Speakers) {
  $scope.speakers = Speakers.all();
})

.controller('SpeakerCtrl', function($scope, $stateParams, Speakers) {
  $scope.speaker = Speakers.getSpeaker($stateParams.speakerid);
  console.log($scope.speaker);
})

.controller('ProgramCtrl', function($scope, $stateParams, Schedule) {
  $scope.program = Schedule.all();
  console.log($scope.program);
});

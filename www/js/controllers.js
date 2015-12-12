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
})

.controller('LocationCtrl', function($scope){
	$scope.showSpinner = true;

	window.dontShowSpinner=function(){
  		$scope.showSpinner = false;
  		document.getElementById("spinner").remove();
	}

})

.controller('TalkCtrl', function($scope, $stateParams, Talks, Speakers) {
  // console.log($stateParams.talkid);
  $scope.talk = Talks.getTalk($stateParams.talkid);
  $scope.speaker = Speakers.getSpeaker($stateParams.talkid);
  console.log($scope.talk);
});

(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchController',LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController($scope){
    // Functions go here
    $scope.checkFood = function(){

      //verifies if the text box isn't empty first.
      if (($scope.name == null) || ($scope.name === "")) {
        $scope.message = "Please Enter Data First";
        //changes button and text class to red in case they're empty
        $scope.vclass = $scope.bclass ="red";
      }else{
        //splits the text entry into an array.
        var arrayOfStrings = $scope.name.split(',');
        // Verify if elements aren't empty
        // variable length is set to check for blank spaces
        // within the array.
        var length = 0;
        for (var i = 0; i < arrayOfStrings.length; i++) {
          if (arrayOfStrings[i] != "") {
            // If element isn't empty increase length size by one.
              length += 1;
            }
          }

          amount(length);
          console.log(length);
      }
    };
    // Depending on the elements prints the message and changes colors.
    function amount (numberOfItems){
      if (numberOfItems <= 3 ) {
        $scope.message = "Enjoy...!";
        $scope.vclass = $scope.bclass = "green";
      }else {
        $scope.message = "Too much!"
        $scope.vclass = $scope.bclass = "green";
      }
    };
  }
})();

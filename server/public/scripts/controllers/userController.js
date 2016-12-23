myApp.controller('userController', ['$scope', '$http', '$animate', '$uibModal', function($scope, $http, $animate, $uibModal) {
    $scope.scopeArray = [];
    var accuracy = 2;
    $scope.mathAnswer = 0;

    $scope.navIsOpen = false;

    $scope.showSidebar = function() {
        if ($scope.sidebar) {
            $scope.sidebar = false;
        } else {
            $scope.sidebar = true;
        }
    }

    $scope.categoryArray = [
        "2-Point Bridles",
        "3-Point Bridles",
        "Light Lvl (area)",
        "Beam",
        "Cable",
        "FC & Lms",
        "H Breastline",
        "Length Conv",
        "Light Lvl (point)",
        "Point Load",
        "Power",
        "Resultant Forces",
        "Truss",
        "Weight Conv"
    ];

    $scope.makeTrue = function(category) {
        makeFalse();
        switch (category) {
            case "2-Point Bridles":
                $scope.twoPointBridles = true;
                $scope.scopeArray.push('twoPointBridles');
                break;
            case "3-Point Bridles":
                $scope.threePointBridles = true;
                $scope.scopeArray.push('threePointBridles');
                break;
            case "Light Lvl (area)":
                $scope.avgLightArea = true;
                $scope.scopeArray.push('avgLightArea');
                break;
            case "Beam":
                $scope.beam = true;
                $scope.scopeArray.push('beam');
                break;
            case "Cable":
                $scope.cable = true;
                $scope.scopeArray.push('cable');
                break;
            case "FC & Lms":
                $scope.footcandlesAndLms = true;
                $scope.scopeArray.push('footcandlesAndLms');
                break;
            case "H Breastline":
                $scope.horizontalBreastline = true;
                $scope.scopeArray.push('horizontalBreastline');
                break;
            case "Length Conv":
                $scope.lengthConv = true;
                $scope.scopeArray.push('lengthConv');
                break;
            case "Light Lvl (point)":
                $scope.lightLvlPoint = true;
                $scope.scopeArray.push('lightLvlPoint');
                break;
            case "Point Load":
                $scope.pointLoad = true;
                $scope.scopeArray.push('pointLoad');
                break;
            case "Power":
                $scope.power = true;
                $scope.scopeArray.push('power');
                break;
            case "Resultant Forces":
                $scope.resultantForces = true;
                $scope.scopeArray.push('resultantForces');
                break;
            case "Truss":
                $scope.truss = true;
                $scope.scopeArray.push('truss');
                break;
            case "Weight Conv":
                $scope.weightConv = true;
                $scope.scopeArray.push('weightConv');
                break;
        }
        $scope.closeNav();
    }

    function makeFalse() {
      $scope.scopeArray.forEach(function(item){
        $scope[item] = false;
      });
        $scope.mathAnswer = 0;
        $scope.sidebar = false;
    }

    $scope.checkInput = function(selectArea, chosenConv) {
        makeFalse();
        // var choice = $scope[chosenConv];
        if($scope[chosenConv] != false){
          $scope.scopeArray.push(chosenConv);
        }
        $scope[selectArea] = true;
        $scope[chosenConv] = true;
    }

    $scope.makeRight = function(selected) {
      if($scope[selected] != false && $scope[selected] != true){
        $scope.scopeArray.push(selected);
      }
        $scope[selected] = false;
        var parameter = selected.substring(0, selected.length - 4);
        parameter += "Right";
        if($scope[parameter] != false && $scope[parameter] != true){
          $scope.scopeArray.push(parameter);
        }
        $scope[parameter] = true;
    }

    $scope.makeLeft = function(selected) {
      if($scope[selected] != false && $scope[selected] != true){
        $scope.scopeArray.push(selected);
      }
        $scope[selected] = false;
        var parameter = selected.substring(0, selected.length - 5);
        parameter += "Left";
        if($scope[parameter] != false && $scope[parameter] != true){
          $scope.scopeArray.push(parameter);
        }
        $scope[parameter] = true;
    }

//I went this route so that I could pair down some of the complex functionss

    $scope.doMath = function(number1, mathType, number2){
      number1 = parseFloat(number1);
      number2 = parseFloat(number2);

      switch(mathType){
        case 'times':
        $scope.mathAnswer = (number1 * number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          $scope.mathAnswer = 0;
        }
        break;
        case 'subtract':
        $scope.mathAnswer = (number1 - number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          $scope.mathAnswer = 0;
        }
        break;
        case 'add':
        $scope.mathAnswer = (number1 + number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          $scope.mathAnswer = 0;
        }
        break;
        case 'div':
        $scope.mathAnswer = (number1 / number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          $scope.mathAnswer = 0;
        }
      }
      return $scope.mathAnswer;
    }

    $scope.findTheSin = function(rFLoadSin, rFAngleSin){
      var fullAngle = (Math.sin(rFAngleSin * Math.PI / 180.0)).toFixed(accuracy);
      var halfAngle = (Math.sin((rFAngleSin * Math.PI / 180.0)/2)).toFixed(accuracy);
      var response = (rFLoadSin * (fullAngle/halfAngle)).toFixed(accuracy);
      if(isNaN(response)){
        $scope.rFTimesLoadAns = 0;
      }
      else{
        $scope.rFTimesLoadAns = response;
      }
    }

    $scope.findTheAtan = function(number){
      var atanNumber = Math.atan(number);
      if(isNaN(atanNumber)){
        $scope.mathAnswer = 0;
      }
      else{
        $scope.mathAnswer = atanNumber;
      }
      return $scope.mathAnswer;
    }

    $scope.findTheSqrt = function(number, specialName){
      var sqrtNumber = Math.sqrt(number).toFixed(2);
      if(specialName != undefined && isNaN(sqrtNumber) == false){
        $scope[specialName] = sqrtNumber;
        return $scope[specialName];
      }
      else if(isNaN(sqrtNumber)){
        $scope.mathAnswer = 0;
        return $scope.mathAnswer;
      }
      else{
        $scope.mathAnswer = sqrtNumber;
        return $scope.mathAnswer;
      }
    }

    $scope.toDegrees = function(angle){
      console.log(angle);
      $scope.mathAnswer = (angle * (180 / Math.PI)).toFixed(2);
      return $scope.mathAnswer;
    }

    $scope.setValue = function(number, specialName){
      console.log(number);
      console.log(specialName);
      $scope[specialName] = number;
    }
    $scope.open = function(_confirmation) {
      var modalInstance = $uibModal.open({
        controller: "ModalInstanceCtrl",
        templateUrl: 'myModalContent.html',
        resolve:
        {
          confirmation: function()
          {
              return _confirmation;
          }
        }
      });
    }
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "75vw";
        document.getElementById("container").style.marginLeft = "75vw";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        $scope.navIsOpen = true;
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("container").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        $scope.navIsOpen = false;
    }
}]);

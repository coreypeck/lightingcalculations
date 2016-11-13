myApp.controller('userController', ['$scope', '$http', '$animate', function($scope, $http, $animate) {
    $scope.scopeArray = [];
    var accuracy = 2;
    $scope.mathAnswer = 0;


    $scope.showSidebar = function() {
        if ($scope.sidebar) {
            $scope.sidebar = false;
        } else {
            $scope.sidebar = true;
        }
    }

    $scope.categoryArray = ["2-Point Bridles",
        "3-Point Bridles",
        "Avg Light Lvl (area)",
        "Beam",
        "Cable",
        "Candlepower",
        "Footcandles",
        "Footcandles & Lms",
        "Horizontal Breastline",
        "Length Conv",
        "Light Lvl (point)",
        "Mechanical Adv",
        "Point Load",
        "Power",
        "Resultant Forces",
        "Truss",
        "Weight Conv"
    ];

    $scope.makeTrue = function(category) {
        makeFalse();
        console.log(category);
        switch (category) {
            case "2-Point Bridles":
                $scope.twoPointBridles = true;
                $scope.scopeArray.push('twoPointBridles');
                break;
            case "3-Point Bridles":
                $scope.threePointBridles = true;
                $scope.scopeArray.push('threePointBridles');
                break;
            case "Avg Light Lvl (area)":
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
            case "Candlepower":
                $scope.candlepower = true;
                $scope.scopeArray.push('candlepower');
                break;
            case "Footcandles":
                $scope.footcandles = true;
                $scope.scopeArray.push('footcandles');
                break;
            case "Footcandles & Lms":
                $scope.footcandlesAndLms = true;
                $scope.scopeArray.push('footcandlesAndLms');
                break;
            case "Horizontal Breastline":
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
            case "Mechanical Adv":
                $scope.mechanicalAdv = true;
                $scope.scopeArray.push('mechanicalAdv');
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
    }

    function makeFalse() {
      console.log($scope.scopeArray);
      $scope.scopeArray.forEach(function(item){
        $scope[item] = false;
      });
        $scope.mathAnswer = 0;
        $scope.sidebar = false;
    }

    $scope.checkInput = function(selectArea, chosenConv) {
        makeFalse();
        var choice = $scope[chosenConv];
        console.log($scope[choice]);
        if($scope[choice] != false){
          console.log("if running!");
          $scope.scopeArray.push(choice);
        }
        $scope[selectArea] = true;
        $scope[choice] = true;
    }

    $scope.makeRight = function(selected) {
        $scope.scopeArray.push(selected);
        $scope[selected] = false;
        var parameter = selected.substring(0, selected.length - 4);
        parameter += "Right";
        $scope[parameter] = true;
    }

    $scope.makeLeft = function(selected) {
        $scope.scopeArray.push(selected);
        $scope[selected] = false;
        var parameter = selected.substring(0, selected.length - 5);
        parameter += "Left";
        $scope[parameter] = true;
    }

    $scope.doMath = function(number1, mathType, number2){
      switch(mathType){
        case 'times':
        $scope.mathAnswer = (number1 * number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          return 0;
        }
        break;
        case 'subtract':
        $scope.mathAnswer = (number1 - number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          return 0;
        }
        break;
        case 'add':
        $scope.mathAnswer = (number1 + number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          return 0;
        }
        break;
        case 'minus':
        $scope.mathAnswer = (number1 / number2).toFixed(accuracy);
        if(isNaN($scope.mathAnswer)){
          return 0;
        }
      }
    }

    $scope.findTheSin = function(rFLoadSin, rFAngleSin){
      console.log(rFLoadSin);
      var fullAngle = (Math.sin(rFAngleSin * Math.PI / 180.0)).toFixed(accuracy);
      console.log(fullAngle);
      var halfAngle = (Math.sin((rFAngleSin * Math.PI / 180.0)/2)).toFixed(accuracy);
      console.log(halfAngle);
      var response = (rFLoadSin * (fullAngle/halfAngle)).toFixed(accuracy);
      if(isNaN(response)){
        $scope.rFTimesLoadAns = 0;
      }
      else{
        $scope.rFTimesLoadAns = response;
      }
    }
}]);

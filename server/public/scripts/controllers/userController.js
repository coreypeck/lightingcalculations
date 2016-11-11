myApp.controller('userController', ['$scope', '$http', '$animate', function($scope, $http, $animate) {
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
    $scope.mathAnswer = 0;
    $scope.makeTrue = function(category) {
        makeFalse();
        console.log(category);
        switch (category) {
            case "2-Point Bridles":
                $scope.twoPointBridles = true;
                break;
            case "3-Point Bridles":
                $scope.threePointBridles = true;
                break;
            case "Avg Light Lvl (area)":
                $scope.avgLightArea = true;
                break;
            case "Beam":
                $scope.beam = true;
                break;
            case "Cable":
                $scope.cable = true;
                break;
            case "Candlepower":
                $scope.candlepower = true;
                break;
            case "Footcandles":
                $scope.footcandles = true;
                break;
            case "Footcandles & Lms":
                $scope.footcandlesAndLms = true;
                break;
            case "Horizontal Breastline":
                $scope.horizontalBreastline = true;
                break;
            case "Length Conv":
                $scope.lengthConv = true;
                break;
            case "Light Lvl (point)":
                $scope.lightLvlPoint = true;
                break;
            case "Mechanical Adv":
                $scope.mechanicalAdv = true;
                break;
            case "Point Load":
                $scope.pointLoad = true;
                break;
            case "Power":
                $scope.power = true;
                break;
            case "Resultant Forces":
                $scope.resultantForces = true;
                break;
            case "Truss":
                $scope.truss = true;
                break;
            case "Weight Conv":
                $scope.weightConv = true;
                break;
        }
    }
    var accuracy = 2;
    function makeFalse() {
        $scope.twoPointBridles = false;
        $scope.threePointBridles = false;
        $scope.avgLightArea = false;
        $scope.beam = false;
        $scope.cable = false;
        $scope.candlepower = false;
        $scope.footcandles = false;
        $scope.footcandlesAndLms = false;
        $scope.horizontalBreastline = false;
        $scope.lengthConv = false;
        $scope.lightLvlPoint = false;
        $scope.mechanicalAdv = false;
        $scope.pointLoad = false;
        $scope.power = false;
        $scope.resultantForces = false;
        $scope.truss = false;
        $scope.weightConv = false;

        $scope.sidebar = false;

        $scope.feetToMeter = false;
        $scope.inchToCenti = false;
        $scope.inchToMili = false;
        $scope.feetToMeterRight = false;
        $scope.feetToMeterLeft = false;
        $scope.inchToCentiRight = false;
        $scope.inchToCentiLeft = false;
        $scope.inchToMiliRight = false;
        $scope.inchToMiliLeft = false;
        $scope.lbToKNRight = false;
        $scope.lbToKGRight = false;
        $scope.lbToKNLeft = false;
        $scope.lbToKGLeft = false;

        $scope.mathAnswer = 0;
    }
    $scope.checkInput = function(selectArea, choosenConv) {
        makeFalse();
        $scope[selectArea] = true;
        var choice = $scope[choosenConv];
        $scope[choice] = true;
    }
    $scope.makeRight = function(selected) {
        $scope[selected] = false;
        var parameter = selected.substring(0, selected.length - 4);
        parameter += "Right";
        $scope[parameter] = true;
    }
    $scope.makeLeft = function(selected) {
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

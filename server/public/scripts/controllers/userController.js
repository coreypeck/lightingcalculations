myApp.controller('userController', ['$scope', '$http', '$animate', function($scope, $http, $animate) {
    $scope.showSidebar = function() {
        console.log("fuck");
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
    $scope.showingArray = [];
    $scope.makeTrue = function(category){
      console.log(category);
      $scope.showingArray = [];
      $scope.showingArray.push(category);
      $scope.sidebar = false;
      $scope.categoryArray.forEach(function(string){
        if($scope.showingArray[0] == category){
          return;
        }else{
          $scope[string] = false;
        }
      });
    };
}]);

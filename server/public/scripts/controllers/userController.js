myApp.controller('userController', ['$scope', '$http', function($scope, $http) {
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
        "Avg Light Level (area)",
        "Beam",
        "Cable",
        "Candlepower",
        "Footcandles",
        "Footcandles and Lumens",
        "Horizontal Breastline",
        "Length Conv",
        "Light Level (point)",
        "Mechanical Adv",
        "Point Load",
        "Power",
        "Resultant Forces",
        "Truss",
        "Weight Conv"
    ];
    $scope.makeTrue = function(category){
      console.log(category)
    };
}]);

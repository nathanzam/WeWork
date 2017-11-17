(function() {
  'use strict';

  var app = angular.module('weWork', [])

    app.controller("WeWorkCtrl", function($http, $scope) {
      $http.get("http://127.0.0.1:5000/").then(function (response) {
        $scope.rooms = response.data;

      });
    })

    app.controller("ReviewCtrl");

}());

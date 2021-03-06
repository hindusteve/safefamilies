(function (window, angular, undefined) {

  "use strict";

  function ProfileEditController($scope, $state, saveUserProfile, userProfile) {
    $scope.error = {};
    $scope.form = "";
    $scope.models = {
      first_name: userProfile.getFirstName(),
      last_name: userProfile.getLastName(),
      address_1: userProfile.getAddress1(),
      address_2: userProfile.getAddress2(),
      city: userProfile.getCity(),
      state: userProfile.getState(),
      zip_code: userProfile.getZipCode(),
      phone_number: userProfile.getPhoneNumber()
    };

    $scope.hasError = function hasError() {
      return !_.isEmpty($scope.error);
    };

    $scope.onSubmit = function onSubmit() {
      saveUserProfile($scope.models).then(function () {
        $state.go("app.profile.detail");
      }, function (response) {
        $scope.error = response;
      });
    };
  }

  angular.module("safefamilies")
    .controller("ProfileEditController", [
      "$scope", "$state", "saveUserProfile", "userProfile", ProfileEditController
    ]);

})(window, window.angular);
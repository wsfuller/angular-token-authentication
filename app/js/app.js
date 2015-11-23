/**
 * Created by steve on 11/22/15.
 */
var app = angular.module('myApp', ['ui.router', 'ngCookies'])



.run(function ($rootScope, $location){
  $rootScope.$on('$stateChangeStart', function (event, next){
    var user = next.data;
    console.log("EVENT: ", event);
    console.log("NEXT: ", next);
    if(next.hasOwnProperty("requiresLogin")){


        $location.path('/');
        event.preventDefault();





    }
    else{
      console.log('do not need to be logged in to view page');
    }
  });
});
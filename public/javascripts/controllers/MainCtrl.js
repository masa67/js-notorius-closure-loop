
angular.module('MainCtrl', []).controller('MainController',
    ['$scope', 'ping', function($scope, ping) {

    var mylist = ['a', 'b', 'c'];

    for (var i=0; i < mylist.length; i++) {

        /*
        // ALT1: works
        var callback = function(result) {
            console.log(result.id)
            console.log(arguments.callee.i);
        }
        callback.i = i;
        users.pingWait({'wait': mylist[i]}, callback);
        */

        // ALT2: works
        var callback = function(n) {
            return function(result) {
                console.log(result.id);
                console.log(n);
           }
        }(i);
        ping.pingWait({'wait': mylist[i]}, callback);
    }
}]);

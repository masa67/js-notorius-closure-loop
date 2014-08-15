
angular.module('PingService', ['PingService']).factory('ping',
    ['$resource', function($resource) {

    return $resource('', {}, {
        pingWait: {method: 'POST', url: '/ping'}
        });
}]);

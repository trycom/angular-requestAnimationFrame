'use strict'
angular.module('ngAnimate')
.factory('$rAF', ['$$animateReflow', '$rootScope', function($$animateReflow, $rootScope) {
	// wrapper so $$animateReflow supports callbacks
	return function(fn) {
		return $$animateReflow(function() {
			$rootScope.$apply(fn);
		})
	}
}])
'use strict';

function HeaderNavCtrl($scope){
	var ctrl = this;
}

angular.module('sabertoothApp')
.component('headerNav', {
	templateUrl: 'header-nav.html',
	controller: HeaderNavCtrl
});
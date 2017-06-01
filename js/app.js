'use strict'

var controllers = angular.module('processStApp.controllers', []);
var components = angular.module('processStApp.components', []);


var processStApp = angular.module('processStApp', [
	'processStApp.controllers',	
	'processStApp.components',
	'blueimp.fileupload'
]);

 processStApp.component("wistiaUploader",{
      templateUrl: 'wistiaUploader.html',
      controller: 'wistiaUploaderCo',
      controllerAs: 'vm'

});
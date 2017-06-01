controllers.controller('wistiaUploaderCo', ['$scope', '$sce', function($scope, $sce) {
	$scope.options = {
   		acceptFileTypes: /(\.|\/)(mp4|avi|mpeg)$/i
	};

	$scope.postToWistia = {};
	$scope.postToWistia.password = "";
	$scope.postToWistia.url = "";

	
	$scope.updatePostUrl = function() {
		$scope.postToWistia.url = $sce.trustAsResourceUrl('https://upload.wistia.com?api_password='+$scope.postToWistia.password);

	}

	$scope.resetValues = function() {
		$scope.wistiaUploadUrl = null;
	}

	//Listener to know when the upload is done
	$scope.$on('fileuploaddone', function(event, files){ 
	    $.each(files, function (index, file) {
	    	if ((file !== null) && (file !== undefined) && (file.hashed_id)) {
				$scope.wistiaUploadUrl = $sce.trustAsResourceUrl("https://fast.wistia.net/embed/iframe/" + file.hashed_id);
			}
		});
	});
}])
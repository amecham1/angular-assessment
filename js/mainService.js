angular.module("assessment")
.service("mainService",mainService);


function mainService($http){

  this.getData = function(){
    $http({
      method:"JSONP",
      url: 'http://practiceapi.devmounta.in/products'
    }).then(function(response))


}//end of service

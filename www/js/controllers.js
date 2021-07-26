angular.module('starter.controllers', [])

.controller('YgsLysCtrl', function($scope) {
})
.controller('TeogCtrl', function($scope) {

  $scope.ortakpuanhesaplama = function(mat,fen,tur,dil,din,ink) {
    $scope.result = ((((mat*20)+(fen*20)+(tur*20)+(ink*10)+(din*10)+(dil*10))/18)/100)*700;
    return $scope.result;
  };
  
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
})
.controller('AlesCtrl', function($scope, $stateParams) {
  $scope.alessayisalpuan = function (s1dog,s1yan,s2dog,s2yan,sz1dog,sz1yan)
  {
    $scope.result = (0.35*(s1dog-(s1yan*0.25)))+(0.35*(s2dog-(s2yan*0.25)))+(0.35*(sz1dog-(sz1yan*0.25)));
    return $scope.result;
  };
  $scope.alessozelpuan = function(s1dog,s1yan,sz1dog,sz1yan,sz2dog,sz2yan)
  {
    $scope.result2 = (0.20*(s1dog-(s1yan*0.25)))+(0.40*((sz1dog-(sz1yan*0.25))+(sz2dog-(sz2yan*0.25))));
    return $scope.result2;
  };
  $scope.alesesitpuan = function(s1dog,s1yan,s2dog,s2yan,sz1dog,sz1yan)
  {
    $scope.result3 = (0.40*(s1dog-(s1yan*0.25)))+(0.2*(s2dog-(s2yan*0.25)))+(0.40*(sz1dog-(sz1yan*0.25)));
    return $scope.result3;
  }
})
.controller('KpssHCtrl',function($scope){
  $scope.HamPuan = function(d,y)
  {
    return d-y*0.25;
  }
  $scope.StandartPuan = function(hp,ort,ssapma)
  {
    return (((hp-ort)/ssapma)*10)+50;
  }
  $scope.HamPuanGYet = $scope.HamPuan($scope.gyetdog,$scope.gyetyan);
  $scope.HamPuanGKul = $scope.HamPuan($scope.gkuldog,$scope.gkulyan);
  $scope.HamPuanEBil = $scope.HamPuan($scope.ebildog,$scope.ebilyan);

  //2016 puan hesaplama 
  $scope.SPuanGYet = $scope.StandartPuan($scope.HamPuanGYet,21.384,8.698);
  $scope.SPuanGKul = $scope.StandartPuan($scope.HamPuanGKul,23.176,12.719);
  $scope.SPuanEBil = $scope.StandartPuan($scope.HamPuanEBil,41.031,12.651);
  $scope.ASPuan = (0.3*$scope.SPuanGYet) + (0.3*$scope.SPuanGKul) + (0.4*$scope.SPuanEBil);
  $scope.KPSSP102016 = 70 + ((30*(2*($scope.ASPuan-51.80114197))-8.12873193)/((2*(70.10239378))-8.12873193));
  $scope.KPSSP32016 = ((0.5*$scope.SPuanGYet) + (0.5*$scope.SPuanGKul))/2+40;
  //2015 puan hesaplama
  $scope.SPuanGYet2 = $scope.StandartPuan($scope.HamPuanGYet,22.869,9.450);
  $scope.SPuanGKul2 = $scope.StandartPuan($scope.HamPuanGYet,21.564,10.942);
  $scope.SPuanEBil2 = $scope.StandartPuan($scope.HamPuanGYet,38.946,16.158);
  $scope.ASPuan2 = (0.3*$scope.SPuanGYet2) + (0.3*$scope.SPuanGKul2) + (0.4*$scope.SPuanEBil2);
  $scope.KPSSP102015 = 70 + ((30*(2*($scope.ASPuan2-51.80114197))-8.12873193)/((2*(70.10239378))-8.12873193));
  $scope.KPSSP32015 = ((0.5*$scope.SPuanGYet2) + (0.5*$scope.SPuanGKul2))/2+40;



})
.controller('KpssCtrl', function($scope) {

});

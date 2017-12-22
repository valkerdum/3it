(function(){
    angular.module( 'Tres.template')
        .controller('tresContactoCtrl',tresContactoCtrl);

    function tresContactoCtrl($scope,  NgMap, upload , $http) {

        var vm = this;

        vm.onSendMail = onSendMail;

        function onSendMail(){


         alert('hola');


        }


    }


})();


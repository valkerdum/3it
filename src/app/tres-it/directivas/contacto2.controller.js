(function(){
    angular.module( 'Tres.template')
        .controller('tresContacto2Ctrl',tresContacto2Ctrl);

    function tresContacto2Ctrl($scope,  NgMap, upload , $http) {

        var vm = this;

        vm.onSendMail = onSendMail;

        function onSendMail(){


         alert('hola');


        }


    }


})();


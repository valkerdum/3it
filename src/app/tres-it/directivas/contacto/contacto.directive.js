(function(){
    angular
        .module('Tres.template')
        .directive('contactoDirectiva', contactoDirectiva);

    function contactoDirectiva(){

        var urlBase = 'tres-it/directivas/contacto/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'contacto.tpl.html',
            controller: 'tresContactoCtrl',
            controllerAs:'tresContacto'


        };
    }

})();


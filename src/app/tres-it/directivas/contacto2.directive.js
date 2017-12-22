(function(){
    angular
        .module('Tres.template')
        .directive('contactoDirectiva', contactoDirectiva);

    function contactoDirectiva(){

        var urlBase = 'tres-it/directivas/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'contacto2.tpl.html',
            controller: 'tresContacto2Ctrl',
            controllerAs:'tres2Contacto'


        };
    }

})();


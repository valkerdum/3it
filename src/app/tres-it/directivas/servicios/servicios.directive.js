(function(){
    angular
        .module('Tres.template')
        .directive('serviciosDirectiva', serviciosDirectiva);

    function serviciosDirectiva(){

        var urlBase = 'tres-it/directivas/servicios/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'servicios.tpl.html',
            controller: 'tresServiciosCtrl',
            controllerAs:'tresServicios'


        };
    }

})();


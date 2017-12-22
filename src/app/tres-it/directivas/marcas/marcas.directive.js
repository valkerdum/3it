(function(){
    angular
        .module('Tres.template')
        .directive('marcasDirectiva', marcasDirectiva);

    function marcasDirectiva(){

        var urlBase = 'tres-it/directivas/marcas/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'marcas.tpl.html',
            controller: 'tresMarcasCtrl',
            controllerAs:'tresMarcas'


        };
    }

})();


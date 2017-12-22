(function(){
    angular
        .module('Tres.template')
        .directive('misionVisionValoresDirectiva', misionVisionValoresDirectiva);

    function misionVisionValoresDirectiva(){

        var urlBase = 'tres-it/directivas/misionVisionValores/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'misionVisionValores.tpl.html',
            controller: 'tresMisionVisionValoresCtrl',
            controllerAs:'tresMision'


        };
    }

})();


(function(){
    angular
        .module('Tres.template')
        .directive('principalDirectiva', principalDirectiva);

    function principalDirectiva(){

        var urlBase = 'tres-it/directivas/seccionPrincipal/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'principal.tpl.html'


        };
    }

})();


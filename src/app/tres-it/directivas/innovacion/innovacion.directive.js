(function(){
    angular
        .module('Tres.template')
        .directive('innovacionDirectiva', innovacionDirectiva);

    function innovacionDirectiva(){

        var urlBase = 'tres-it/directivas/innovacion/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'innovacion.tpl.html',
            controller: 'tresInnovacionCtrl',
            controllerAs:'tresInnovacion'


        };
    }

})();


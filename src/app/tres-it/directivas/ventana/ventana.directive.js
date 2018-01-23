(function(){
    angular
        .module('Tres.template')
        .directive('ventanaDirectiva', ventanaDirectiva);

    function ventanaDirectiva(){

        var urlBase = 'tres-it/directivas/ventana/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'ventana.tpl.html',
            controller: 'tresVentanaCtrl',
            controllerAs:'tresVentana'


        };
    }

})();


(function () {
    angular.module('Tres.template')
        .controller('felicidadesController', felicidadesController);

    function felicidadesController($scope, $window) {
        var vm = this;
        vm.txt="hola";
        vm.volverAtras=volverAtras;
        function volverAtras(){
            $window.history.back();
        }
    }

})();

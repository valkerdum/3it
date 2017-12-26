(function(){
    angular.module( 'Tres.template')
        .controller('tresContactoCtrl',tresContactoCtrl);

    function tresContactoCtrl($scope ,factory3it) {

        var vm = this;

        //
        vm.nombre = '';
        vm.email = '';
        vm.telefono = '';
        vm.servicio = '';
        vm.descripcion = '';

        vm.onSendMail = onSendMail;

        function onSendMail(){
            var request={
                mensaje : 'nombre :' + vm.nombre + '\n' + 'email :' + vm.email + '\n' + 'telefono :' + vm.telefono + '\n' + 'servicio :' + vm.servicio + '\n' + 'descripcion :' + vm.descripcion + '\n',

                asunto : 'Contacto 3it Ingenieria'
            };
            factory3it.sendMail( request ).then(function(data){
               //hacer algo
            });

        }


    }


})();


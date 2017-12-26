(function(){
    angular.module( 'Tres.template')
        .controller('tresContactoCtrl',tresContactoCtrl);

    function tresContactoCtrl($scope ,factory3it,vcRecaptchaService) {

        var vm = this;

        //captcha
        vm.key="6LeIZj4UAAAAAKoBpaJifkof7HTWjC5uWtsyWSxK";
        vm.response = null;
        vm.widgetId = null;

        vm.setResponse = function (response) {
            console.info('Response available');

            vm.response = response;
        };

        vm.setWidgetId = function (widgetId) {
            console.info('Created widget ID: %s', widgetId);

            vm.widgetId = widgetId;
        };

        vm.cbExpiration = function() {
            console.info('Captcha expired. Resetting response object');

            vcRecaptchaService.reload(vm.widgetId);

            vm.response = null;
        };
        //
        vm.nombre = '';
        vm.email = '';
        vm.telefono = '';
        vm.servicio = '';
        vm.descripcion = '';

        vm.onSendMail = onSendMail;

        function onSendMail(){
            var valid;
            console.log('sending the captcha response to the server',vm.response);
            if (valid) {
                console.log('Success');
                var request={
                    mensaje : 'nombre :' + vm.nombre + '\n' + 'email :' + vm.email + '\n' + 'telefono :' + vm.telefono + '\n' + 'servicio :' + vm.servicio + '\n' + 'descripcion :' + vm.descripcion + '\n',
    
                    asunto : 'Contacto 3it Ingenieria'
                };
                factory3it.sendMail( request ).then(function(data){
                   //hacer algo
                });

            } else {
                console.log('Failed validation');
                vcRecaptchaService.reload($scope.widgetId);
            }
           

        }


    }


})();


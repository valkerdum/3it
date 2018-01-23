(function(){
    angular.module( 'Tres.template')
        .controller('tresContactoCtrl',tresContactoCtrl);

    function tresContactoCtrl($scope ,factory3it,vcRecaptchaService, $mdDialog) {

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

        vm.Abrir_ventana = Abrir_ventana;

        function onSendMail(){
            var valid;
           // console.log('sending the captcha response to the server',vm.response);
            //if (valid) {
               // console.log('Success');
               // var request={
                   // mensaje : 'nombre :' + vm.nombre + '\n' + 'email :' + vm.email + '\n' + 'telefono :' + vm.telefono + '\n' + 'servicio :' + vm.servicio + '\n' + 'descripcion :' + vm.descripcion + '\n',
    
                  //  asunto : 'Contacto 3it Ingenieria'
                //};
                //factory3it.sendMail( request ).then(function(data){
                   //hacer algo
                   alert("¡Gracias por ponerte en contacto con nosotros! Tus datos han sido recepcionados con éxito y muy pronto te contactáremos.");
                   $scope.step1=true;
                   $scope.step2=false;
                   $scope.step3=false;
                   $scope.clase1=true;
                   $scope.clase2=false;
                   $scope.clase3=false;
                   clear();
                //},
                //function(error){

                //});

            //} else {
             //   console.log('Failed validation');
             //   vcRecaptchaService.reload($scope.widgetId);
            //}
           

        }
             function Abrir_ventana (ev) {

            $scope.step1=true;
            $scope.step2=false;
            $scope.step3=false;
            $scope.clase1=true;
            $scope.clase2=false;
            $scope.clase3=false;
            clear();

           // var opciones="toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, width=508, height=365, top=85, left=140";
            //window.open(pagina,"",opciones);

                 $mdDialog.show(
                     $mdDialog.alert()
                         .parent(angular.element(document.querySelector('#popcontainer')))
                         .clickOutsideToClose(true)
                         .title('This is an alert title')
                         .textContent('You can specify some description text in here.')
                         .ariaLabel('Alert Dialog Demo')
                         .ok('Got it!')
                         .targetEvent(ev)
                 );



        }


        function clear(){
            vm.nombre = '';
            vm.email = '';
            vm.telefono = '';
            vm.servicio = '';
            vm.descripcion = '';
        }
    }


})();


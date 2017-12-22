(function(){
    angular.module( 'Tres.template')
        .controller('tresContactoCtrl',tresContactoCtrl);

    function tresContactoCtrl($scope ,factory3it) {

        var vm = this;

        vm.onSendMail = onSendMail;

        function onSendMail(){
            var request={};
            factory3it.sendMail(request).then(function(data){
               //hacer algo
            });

        }


    }


})();


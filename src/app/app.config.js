(function(){
angular
		.module( 'WebBancoChile')
		.config(myAppConfig);

function myAppConfig($stateProvider, $urlRouterProvider,$animateProvider) {
    $animateProvider.classNameFilter(/animate-/);
    $stateProvider.state('root', {
        abstract: true,
        views: {
            "header@": {
                templateUrl: 'templates/header.tpl.html'
            },
            "main@": {

            },            
            "contacto@": {
                templateUrl: 'banco-chile/banco-controller/contacto.tpl.html'
            },
            "footer@": {
                templateUrl: 'templates/footer.tpl.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/banco-chile');
}

})();
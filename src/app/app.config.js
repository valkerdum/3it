(function(){
angular
		.module( 'Tres')
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
                templateUrl: 'tres-it/tres-controller/contacto.tpl.html'
            },
            "footer@": {
                templateUrl: 'templates/footer.tpl.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/');
}

})();
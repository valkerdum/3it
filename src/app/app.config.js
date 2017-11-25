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
            "footer@": {
                templateUrl: 'templates/footer.tpl.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/banco-chile');
}

})();
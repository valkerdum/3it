(function(){
angular.module( 'Tres.template' ).config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    var urlBase = 'tres-it/';
    $stateProvider.state('tres', {
        parent: 'root',
        url: '/',
        views: {
            "main@": {
                controller: 'tresCtrl',
                controllerAs: 'tres',
                templateUrl: urlBase + 'tres-controller/tres.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    })
    .state('contacto', {
            parent: 'root',
            url: '/contacto',
            views: {
                "main@": {
                    controller: 'bancoChileCtrl',
                    controllerAs: 'banco',
                    templateUrl: urlBase + 'banco-controller/contacto.tpl.html'
                }
            },
            data:{ pageTitle: 'Contacto' }
        });
}

})();
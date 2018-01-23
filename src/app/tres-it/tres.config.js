(function(){
angular.module( 'Tres.template' ).config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    var urlBase = 'tres-it/';
    $stateProvider.state('tres', {
        parent: 'root',
        url: '/home',
        views: {
            "main@": {
                controller: 'mainCtrl',
                controllerAs: 'main',
                templateUrl: urlBase + 'main.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    })
    .state('3itfelicidades', {
        parent: 'root',
        url: '/felicidades',
        views: {
            "main@": {
                controller: 'felicidadesController',
                controllerAs: 'felicidades',
                templateUrl: urlBase + 'felicidades/felicidades.tpl.html'
            }
        },
        data: { pageTitle: 'felicidades' }
    });
    // .state('3itfelicidades', {
    //     parent: '3itfelicidades',
    //     url: '/felicidades',
    //     controller: 'felicidadesController',
    //     controllerAs: 'felicidades',
    //     templateUrl: urlBase + 'felicidades/felicidades.tpl.html',
    //     data: { pageTitle: 'felicidades' }
    // });
}

})();
(function(){
angular.module( 'WebBancoChile.template' ).config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    var urlBase = 'banco-chile/';
    $stateProvider.state('banco-chile', {
        parent: 'root',
        url: '/3it',
        views: {
            "main@": {
                controller: 'bancoChileCtrl',
                controllerAs: 'banco',
                templateUrl: urlBase + 'banco-controller/bancochile.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    });
}

})();
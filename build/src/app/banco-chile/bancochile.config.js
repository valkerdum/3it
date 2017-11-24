(function(){
angular.module( 'WebBancoChile.template' ).config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    var urlBase = 'banco-chile/';
    $stateProvider.state('banco-chile', {
        parent: 'root',
        url: '/banco-chile',
        views: {
            "main@": {
                controller: 'bancoChileCtrl',
                controllerAs: 'banco',
                templateUrl: urlBase + 'banco-controller/bancochile.tpl.html'
            }
        },
        data:{ pageTitle: 'Vista Nueva' }
    });
}

})();
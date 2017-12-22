(function(){
angular.module( 'Tres.template' ).config(bancoChileConfig);

function bancoChileConfig( $stateProvider ) {
    var urlBase = 'tres-it/';
    $stateProvider.state('tres', {
        parent: 'root',
        url: '/',
        views: {
            "main@": {
                controller: 'mainCtrl',
                controllerAs: 'main',
                templateUrl: urlBase + 'main.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' }
    });
}

})();
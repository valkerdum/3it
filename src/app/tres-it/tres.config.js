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
    });
}

})();
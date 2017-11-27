(function () {
    angular
        .module( 'WebBancoChile', [
            'ui.router',
            'templates-app',
            'templates-common',
            'templates-orion',
            'WebBancoChile.template',
            'WebBancoChile.constants',
            'ui.carousel',
            'ngParallax',
            'ngMap'

        ]);
})();
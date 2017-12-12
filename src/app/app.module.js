(function () {
    angular
        .module( 'Tres', [
            'ui.router',
            'templates-app',
            'templates-common',
            'templates-orion',
            'Tres.template',
            'Tres.constants',
            'ui.carousel',
            'ngParallax',
            'ngMap',
            'duScroll',
            'lr.upload',
            'slickCarousel'
        ]).value('duScrollOffset', 50);
})();
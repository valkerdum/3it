(function(){
    angular
        .module('Tres.template')
        .directive('blogDirectiva', blogDirectiva);

    function blogDirectiva(){

        var urlBase = 'tres-it/directivas/blog/';
        return {
            restrict: 'AE',
            scope:{
                tipo:'@'
            },
            templateUrl: urlBase+'blog.tpl.html',
            controller: 'tresblogCtrl',
            controllerAs:'tresBlog'


        };
    }

})();


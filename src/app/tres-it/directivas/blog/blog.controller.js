(function(){
    angular.module( 'Tres.template')
        .controller('tresblogCtrl',tresblogCtrl);

    function tresblogCtrl($scope) {

        var vm = this;

        vm.hideDots = function() {
			$('.slick-dots').addClass('hide animate');
		};

		vm.showDots = function() {
			$('.slick-dots').removeClass('hide');
			$('.slick-dots').addClass('fadeIn');
        };
        
        
		vm.contenidoBlog = [
			{	titulo: "Título Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			},
			{	
				titulo: "Título Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			},
			{	titulo: "Título Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			}
		];
		
    }


})();


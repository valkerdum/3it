(function(){
angular.module( 'WebBancoChile.template')
.controller('bancoChileCtrl',bancoChileCtrl);

	function bancoChileCtrl($scope){
		var vm = this; 

		vm.slides = [
			{
				title: "",
				image: './assets/images/dummy/vision.jpg'
			},
			{
				title: "",
				image: './assets/images/dummy/mision.jpg'
			},
			{
				title: "",
				image: './assets/images/dummy/valores.jpg'
			}
		];

		vm.slidesService = [
			{	tituloClase: 'agile',
				titulo: "Mundo Ágil",
				tituloColor: '#ebc124',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-agile.jpg',
				tituloDetalle: "Mundo Ágil",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			},
			{	
				tituloClase: 'proyectos',
				titulo: "Proyectos",
				tituloColor: '#c53f41',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-proyectos.jpg',
				tituloDetalle: "Proyectos",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			},
			{	tituloClase: 'outsourcing',
				titulo: "Outsourcing",
				tituloColor: '#3099ca',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-outsourcing.jpg',
				tituloDetalle: "Outsourcing",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			}
		];

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				$(".header-follow").addClass("showheader");
				$(".header-follow").addClass("fadeInDown");
			} else {
				$(".header-follow").removeClass("showheader");
				$(".header-follow").removeClass("fadeInDown");
			}
		});

	}


})();



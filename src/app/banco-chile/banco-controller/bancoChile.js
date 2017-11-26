(function(){
angular.module( 'WebBancoChile.template')
.controller('bancoChileCtrl',bancoChileCtrl);

	function bancoChileCtrl($scope){
		var vm = this; 

		vm.slides = [
			{
				textoCabecera:"¿Quiénes somos?",
				titulo:"Valores",
				textoBajada:"Adoptamos el uso de nuevas tecnologías como base a través de equipos de trabajo inte grales que aporten valor y compromiso a nuestros clientes, asegurando así la continuidad operativa de sus negocios.",
				image: './assets/images/mvv/valores.png'
			},
			{
				textoCabecera:"¿Quiénes somos?",
				titulo:"Visión",
				textoBajada:"Ser reconocidos como una empresa innovadora, que entrega soluciones tecnológicas y que forma equipos de trabajo integrales, que están constantemente recibiendo retroalimentación e implementando nuevas metodologías en el desarrollo de los servicios. Con el fin de convertirnos en aliados estratégicos de nuestros clientes.",
				image: './assets/images/mvv/vision.png'
			},
			{
				textoCabecera:"¿Quiénes somos?",
				titulo:"Misión",
				textoBajada:"Adoptamos el uso de nuevas tecnologías como base e inspiración para entregar soluciones innovadoras, a través de equipos de trabajo inte grales que aporten valor y compromiso a nuestros clientes, asegurando así la continuidad operativa de sus negocios.",
				image: './assets/images/mvv/mision.png'
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



(function(){
angular.module( 'Tres.template')
.controller('tresCtrl',tresCtrl);

	function tresCtrl($scope,  NgMap, upload){
		var vm = this;

		vm.hideDots = function() {
			$('.slick-dots').addClass('hide animate');
		};

		vm.showDots = function() {
			$('.slick-dots').removeClass('hide');
			$('.slick-dots').addClass('fadeIn');
		};

		var inicio = angular.element(document.getElementById('inicio'));
		vm.toinicio = function() {
			$document.scrollToElementAnimated(inicio);
		};

		var quienes = angular.element(document.getElementById('quienes'));
		vm.toquienes = function() {
			$document.scrollToElementAnimated(quienes);
		};

		var goservicios = angular.element(document.getElementById('goservicios'));
		vm.togoservicios = function() {
			$document.scrollToElementAnimated(goservicios);
		};

		var innovacion = angular.element(document.getElementById('innovacion'));
		vm.toinnovacion = function() {
			$document.scrollToElementAnimated(innovacion);
		};

		var contacto = angular.element(document.getElementById('contacto'));
		vm.tocontacto = function() {
			$document.scrollToElementAnimated(contacto);
		};

		vm.slides = [
			{	textoCabeceraAnimacion:'fadeIn',
				textoCabecera:"¿Quiénes somos?",
				tituloAnimacion: 'fadeInDown',
				titulo:"Valores",
				textoBajada:"",
				bajadaAnimacion: 'fadeIn',
				image: './assets/images/mvv/valores.png',
				listado: './assets/images/mvv/listado-mvv.png'
			},
			{	textoCabeceraAnimacion:'fadeIn',
				textoCabecera:"¿Quiénes somos?",
				tituloAnimacion: 'fadeInDown',
				titulo:"Visión",
				textoBajada:"Ser reconocidos como una empresa innovadora, que entrega soluciones tecnológicas y que forma equipos de trabajo integrales, que están constantemente recibiendo retroalimentación e implementando nuevas metodologías en el desarrollo de los servicios. Con el fin de convertirnos en aliados estratégicos de nuestros clientes.",
				bajadaAnimacion: 'fadeIn',
				image: './assets/images/mvv/vision.png'
			},
			{	textoCabeceraAnimacion:'fadeIn',
				textoCabecera:"¿Quiénes somos?",
				tituloAnimacion: 'fadeInDown',
				titulo:"Misión",
				textoBajada:"Adoptamos el uso de nuevas tecnologías como base e inspiración para entregar soluciones innovadoras, a través de equipos de trabajo inte grales que aporten valor y compromiso a nuestros clientes, asegurando así la continuidad operativa de sus negocios.",
				bajadaAnimacion: 'fadeIn',
				image: './assets/images/mvv/mision.png'
			}
		];

		vm.slidesService = [
			{	tituloClase: 'agile',
				titulo: "Mundo Ágil",
				tituloColor: '#ebc124',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-agile.jpg',
				tituloDetalle: "Mundo Ágil",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			},
			{	
				tituloClase: 'proyectos',
				titulo: "Proyectos",
				tituloColor: '#c53f41',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-proyectos.jpg',
				tituloDetalle: "Proyectos",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			},
			{	tituloClase: 'outsourcing',
				titulo: "Outsourcing",
				tituloColor: '#3099ca',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-outsourcing.jpg',
				tituloDetalle: "Outsourcing",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
			}
		];


		vm.contenidoBlog = [
			{	titulo: "Titulo Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			},
			{	
				titulo: "Titulo Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			},
			{	titulo: "Titulo Columna",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "LEER MÁS",
				image: './assets/images/blog/imagen-blog.jpg'
			}
		];

		vm.slidesMarcas = [
			{	
				colorMarca: '#293061',
				logoEmpresa: "./assets/images/marcas/logo-bch.png",
				imgAncho:'343',
				imgAlto:'81',
				proyecto: "Banco de Chile",
				year: "20XX",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				fondoMarca: './assets/images/marcas/detalle/banco-de-chile.jpg'
			},
			{	
				colorMarca: '#d36a14',
				logoEmpresa: "./assets/images/marcas/logo-udla.png",
				imgAncho:'218',
				imgAlto:'58',
				proyecto: "Udla",
				year: "20XX",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				fondoMarca: './assets/images/marcas/detalle/udla.jpg'
			},
			{	
				
				colorMarca: '#f66623',
				logoEmpresa: "./assets/images/marcas/logo-intervalores.png",
				imgAncho:'288',
				imgAlto:'62',
				proyecto: "Inter Valores",
				year: "20XX",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				fondoMarca: './assets/images/marcas/detalle/intervalores.jpg'
			},
			{	
				colorMarca: '#002141',
				logoEmpresa: "./assets/images/marcas/logo-aiep.png",
				imgAncho:'214',
				imgAlto:'72',
				proyecto: "Aiep",
				year: "20XX",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				fondoMarca: './assets/images/marcas/detalle/aiep.jpg'
			},
			{	
				colorMarca: '#2e63aa',
				logoEmpresa: "./assets/images/marcas/logo-credichile.png",
				imgAncho:'342',
				imgAlto:'57',
				proyecto: "CrediChile",
				year: "20XX",
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				fondoMarca: './assets/images/marcas/detalle/credichile.jpg'
			},
			{	
				colorMarca: '#0f4f6a',
				logoEmpresa: "./assets/images/marcas/logo-er.png",
				imgAncho:'93',
				imgAlto:'95',
				proyecto: "Empresas Recourse",
				year: "20XX",
				descripcion: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				fondoMarca: './assets/images/marcas/detalle/empresa-recourse.jpg'
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



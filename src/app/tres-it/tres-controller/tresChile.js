(function(){
angular.module( 'Tres.template')
.controller('tresCtrl',tresCtrl);

	function tresCtrl($scope,  NgMap, upload){
		var vm = this;
		
		
		$scope.slickConfig = { method: {} } ;

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

		var inicioMobile = angular.element(document.getElementById('inicioMobile'));
		vm.toinicioMobile = function() {
			$document.scrollToElementAnimated(inicioMobile);
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
				bajadaAnimacion: 'fadeIn',
				image: './assets/images/mvv/valores.png',
				listado: './assets/images/mvv/listado-mvv.png'
				// textoBajada:"<ul> <li>Innovación</li> <li>Calidad</li> <li>Compromiso</li> <li>Responsabilidad</li> <li>Orientación al cliente</li></ul>"
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

		vm.slidesServicios = [
			{	
				seccion: 'SERVICIOS',
				tituloClase: 'agile',
				titulo: "Mundo Ágil",
				tituloColor: '#ebc124',
				backgroundColor: '235,193,36',
				descripcion: "En un mercado que cada vez se mueve más rápido, ayudamos a las empresas a que se puedan adaptar a estas nuevas condiciones, fomentando el trabajo proactivo, la creatividad y el trabajo en equipo.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-agile.jpg',
				tituloDetalle: "Mundo Ágil",
                textoDetalle: "Ser Ágil es una mentalidad.",
				detalles: [
				{
					titulo: 'Soporte y continuidad ',
					descripcion: 'Contamos con equipos especializados para mantener el up-time de tus sistemas. Asimismo, contamos con la resolución de incidencias de los mismos, con equipos dedicados.'
				},
				{
					titulo: 'Especialistas en metodologías ágiles ',
					descripcion: 'Contamos con equipos certificados y la mejor asesoría en proyectos ágiles, basados en experiencias y proyectos con casos de éxito.'
				},
				{
					titulo: 'Células ágiles ',
					descripcion: 'Desarrollamos y potenciamos el talento de nuestro equipo a través de una constante búsqueda de nuevas tecnologías, que permitan entregar un mejor servicio.\n' +
                    '\n' +
                    'El resultado: Un equipo de élite integrado por expertos en TI, que desafían los métodos tradicionales y que permiten a nuestros clientes, obtener una mayor eficiencia y productividad en sus negocios.\n'
				},
				{
					titulo: 'PMO Agile',
					descripcion: 'Contamos con especialistas de vasta experiencia en control y gestión de proyectos ágiles, lo cual entrega la visibilidad necesaria para la gestión de cada proyecto.'
				}
				]
			},
			{	
				seccion: 'SERVICIOS',
				tituloClase: 'proyectos',
				titulo: "Proyectos",
				tituloColor: '#c53f41',
				backgroundColor: '197,63,65',
				descripcion: "En base a los requerimientos entregados por nuestros clientes, desarrollamos soluciones innovadoras para su negocio, aportando desde nuestra vereda, dedicación, calidad y compromiso en cada una de ellas. Nuestro equipo cuenta con la capacidad y experiencia necesaria para garantizar el desarrollo e implementación exitosa de cada proyecto.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-proyectos.jpg',
				tituloDetalle: "Proyectos",
                textoDetalle: "Resolvemos problemas de forma innovadora.",
				detalles: [
				{
					titulo: 'Desarrollo de software a medida ',
					descripcion: 'Nos adaptamos a las necesidades de tu empresa, desarrollamos aplicaciones ajustadas a tu negocio con la mejor calidad y a corto plazo.'
				},
				{
					titulo: 'Mantención de sistemas y mejora continua',
					descripcion: 'Conocemos la importancia de la disponibilidad de los sistemas, contamos con una vasta experiencia en mantención y mejoras de sistemas, plataformas legadas y servicios de integración, procesos batch, conectores, etc.'
				},
				{
					titulo: 'Oficina (PMO)',
					descripcion: 'El control y gestión de los proyectos son una herramienta clave para el seguimiento de los desarrollos y aportan al cumplimiento de los hitos relevantes de cada proyecto.'
				},
				{
					titulo: 'Desarrollo de APPS Móviles y Web',
					descripcion: 'Hoy en día los canales más importantes para la industria de cara a clientes, y que además deben estar en constante renovación y mejora, contamos con expertos que buscan entregar la mejor herramienta para el negocio.'
				}
				]
			}
			/*
			,
			{	
				seccion: 'SERVICIOS',
				tituloClase: 'outsourcing',
				titulo: "Outsourcing",
				tituloColor: '#3099ca',
				backgroundColor: '48,153,202',
				descripcion: "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				botonText: "VER MÁS",
				image: './assets/images/servicios-outsourcing.jpg',
				tituloDetalle: "Outsourcing",
				textoDetalle:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
				detalles: [
				{
					titulo: 'Titulo 1',
					descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam rem id porro, tempore eligendi veniam, harum quae voluptatum quos blanditiis. Dolores ullam, molestias maiores dolorem reprehenderit quaerat quia laudantium.'
				},
				{
					titulo: 'Titulo 2',
					descripcion: 'Lorem ipsum dolor sit amet, quaerat quia laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi numquam optio delectus perspiciatis, facilis corporis asperiores incidunt rem dicta, exercitationem a laborum doloremque, veritatis aperiam consectetur quos reiciendis consequuntur porro Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eum, cumque atque architecto, sint commodi tenetur accusantium. Neque, debitis qui quod vero molestias error ratione distinctio dolor placeat voluptatibus illo.'
				},
				{
					titulo: 'Titulo 3',
					descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam rem id porro, tempore eligendi veniam, harum quae voluptatum quos blanditiis. Dolores ullam, molestias maiores dolorem reprehenderit quaerat quia laudantium.'
				},
				{
					titulo: 'Titulo 4',
					descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam rem id porro, tempore eligendi veniam, harum quae voluptatum quos blanditiis. Dolores ullam, molestias maiores dolorem reprehenderit quaerat quia laudantium.'
				}
				]
			}
			*/
		];

		vm.slidesInnovacion = [
			{	
				seccion: 'SERVICIOS',
				tituloClase: 'agile',
				titulo: "3IT Labs",
				tituloColor: '#3f9b49',
				backgroundColor: '63,155,73',
				descripcion: "Desarrollamos distintas actividades que potencian el espíritu de innovación dentro del equipo, de esta forma destinamos tiempo en investigar y desarrollar nuevas tecnologías con el fin de estar en una mejora continua.",
				botonText: "VER MÁS",
				image: './assets/images/innovacion-background.jpg',
				tituloDetalle: "3IT Labs",
                textoDetalle: "",
				detalles: [
				{
					titulo: 'RA&I',
					descripcion: 'Contamos con RA&I Squad, especialistas en revivir apps e ideas.'
				},
                    {
                        titulo: 'REVIVING APPS & IDEAS',
                        descripcion: ''
                    }

				/*,
				{
					titulo: 'Titulo 2',
					descripcion: 'Lorem ipsum dolor sit amet, quaerat quia laudantium.'
				},
				{
					titulo: 'Titulo 3',
					descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam rem id porro, tempore eligendi veniam, harum quae voluptatum quos blanditiis. Dolores ullam, molestias maiores dolorem reprehenderit quaerat quia laudantium.'
				},
				{
					titulo: 'Titulo 4',
					descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum laboriosam rem id porro, tempore eligendi veniam, harum quae voluptatum quos blanditiis. Dolores ullam, molestias maiores dolorem reprehenderit quaerat quia laudantium.'
				}
				*/
				]
			}
		];



		/*
		* entrada para el blog
		* */

		/*
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
		*/
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



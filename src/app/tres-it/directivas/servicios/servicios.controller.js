(function(){
    angular.module( 'Tres.template')
        .controller('tresServiciosCtrl',tresServiciosCtrl);

    function tresServiciosCtrl($scope) {

        var vm = this;
        vm.hideDots = function() {
			$('.slick-dots').addClass('hide animate');
		};

		vm.showDots = function() {
			$('.slick-dots').removeClass('hide');
			$('.slick-dots').addClass('fadeIn');
        };
        
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


    }


})();
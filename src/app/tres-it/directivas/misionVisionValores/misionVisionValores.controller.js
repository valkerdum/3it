(function(){
    angular.module( 'Tres.template')
        .controller('tresMisionVisionValoresCtrl',tresMisionVisionValoresCtrl);

    function tresMisionVisionValoresCtrl($scope,  NgMap, upload , $http) {

        var vm = this;

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


    }


})();
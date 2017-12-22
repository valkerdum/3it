(function(){
    angular.module( 'Tres.template')
        .controller('tresMarcasCtrl',tresMarcasCtrl);

    function tresMarcasCtrl($scope,  NgMap, upload , $http) {

        var vm = this;

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

    }


})();


(function(){
angular.module( 'Tres.template')
.controller('mainCtrl',mainCtrl);

	function mainCtrl($scope,  NgMap, upload){
		var vm = this;
		
		
		$scope.slickConfig = { method: {} } ;

		

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



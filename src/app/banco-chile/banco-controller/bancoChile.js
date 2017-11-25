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
			{
				title: "",
				image: './assets/images/dummy/servicios-1.jpg'
			},
			{
				title: "",
				image: './assets/images/dummy/servicios-2.jpg'
			},
			{
				title: "",
				image: './assets/images/dummy/servicios-3.jpg'
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



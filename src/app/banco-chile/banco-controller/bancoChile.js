(function(){
angular.module( 'WebBancoChile.template')
.controller('bancoChileCtrl',bancoChileCtrl);

	function bancoChileCtrl(){
		var vm = this;

		vm.etiqueta = 'Hola Mundo';

		vm.slides = [
	{
		title: "1 title",
		image: 'http://lorempixel.com/560/400/sports/1'
	},
	{
		title: "2 title",
		image: 'http://lorempixel.com/560/400/sports/2'
	},
	{
		title: "3 title",
		image: 'http://lorempixel.com/560/400/sports/3'
	},
	{
		title: "4 title",
		image: 'http://lorempixel.com/560/400/sports/4'
	},
	{
		title: "5 title",
		image: 'http://lorempixel.com/560/400/sports/5'
	}
	];

	}
})();

(function(){
    angular.module( 'Tres.template')
        .controller('tresInnovacionCtrl',tresInnovacionCtrl);

    function tresInnovacionCtrl($scope) {

		var vm = this;
		
		vm.hideDots = function() {
			$('.slick-dots').addClass('hide animate');
		};

		vm.showDots = function() {
			$('.slick-dots').removeClass('hide');
			$('.slick-dots').addClass('fadeIn');
		};
		
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

    }


})();


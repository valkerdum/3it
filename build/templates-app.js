angular.module('templates-app', ['tres-it/tres-controller/contacto.tpl.html', 'tres-it/tres-controller/tres.tpl.html']);

angular.module("tres-it/tres-controller/contacto.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tres-it/tres-controller/contacto.tpl.html",
    "<div class=\"col-xs-12 padd-none\">\n" +
    "<section class=\"view-contacto flex relative\" id=\"contacto\">\n" +
    "	<div class=\"col-lg-8 col-sm-7 col-xs-12 padd-none wrap-step\">\n" +
    "		<ul class=\"steps\" ng-hide=\"step4 == true\">\n" +
    "			<li ng-class='{activo: !step1, inactivo: step1}'>1</li>\n" +
    "			<li ng-class='{activo: step2}'>2</li>\n" +
    "			<li ng-class='{activo: step3}'>3</li>\n" +
    "		</ul> \n" +
    "	</div>\n" +
    "	<div ng-parallax pattern=\"'./assets/images/contacto-background.jpg'\" class=\"col-lg-8 col-sm-7 col-xs-12 flex relative backgorund-logo\">\n" +
    "		<div class=\"col-xs-12 vertical-align\" ng-hide=\"step2||step3||step4\">\n" +
    "			<div class=\"w-50\">\n" +
    "				<h2 class=\"text-center\">¡Únete a nuestro equipo!</h2>\n" +
    "				<form action=\"\">\n" +
    "					<div class=\"row\">\n" +
    "						<ul class=\"link-list\">\n" +
    "							<li>\n" +
    "								<input type=\"radio\" id=\"proyecto\" name=\"mensaje\" ng-model=\"proyecto\" /> \n" +
    "								<label for=\"proyecto\">Cuéntanos tu proyecto</label>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<input type=\"radio\" id=\"trabajo\" name=\"mensaje\" ng-model=\"trabajo\" /> \n" +
    "								<label for=\"trabajo\">Trabaja con nosotros</label>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-12 text-center mt-100\">\n" +
    "						<button type=\"button\" ng-click=\"step1=true;step2=true\" class=\"btn-transparent\">SIGUIENTE</button>	\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-xs-12 vertical-align\" ng-show=\"step2\">\n" +
    "			<div class=\"w-50\">\n" +
    "				<h2 class=\"mb-40 text-center\">Completa tus datos:</h2>\n" +
    "				<form class=\"form-text\">\n" +
    "					<div class=\"group\">      \n" +
    "						<input type=\"text\" required>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label>Nombre</label>\n" +
    "					</div>			  \n" +
    "					<div class=\"group\">      \n" +
    "						<input type=\"text\" required>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label>E-mail</label>\n" +
    "					</div>\n" +
    "					<div class=\"group\">      \n" +
    "						<input type=\"text\" required>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label>Teléfono</label>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-12 text-center\">\n" +
    "						<button type=\"button\" ng-click=\"step1=true;step2=false;step3=true\" class=\"btn-transparent\">SIGUIENTE</button>\n" +
    "						<br>\n" +
    "						<button class=\"btn-reload mt-20\" ng-click=\"step1=true;step2=false\">\n" +
    "							<i class=\"custom-icon icon-reload\"></i>\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-xs-12 vertical-align\" ng-show=\"step3\">\n" +
    "			<div class=\"w-50\">\n" +
    "				<h2 class=\"mb-40 text-center\">¿Qué tienes en mente?</h2>\n" +
    "				<form class=\"form-text\">\n" +
    "					<div class=\"group\">\n" +
    "						<div class=\"styled-select\" ng-click=\"uploadClick=true\">\n" +
    "							<select name=\"\" id=\"\">\n" +
    "								<option value=\"\" selected=\"\" disabled=\"\"> </option>\n" +
    "								<option value=\"\">Servicio 1</option>\n" +
    "								<option value=\"\">Servicio 2</option>\n" +
    "								<option value=\"\">Servicio 3</option>\n" +
    "							</select>\n" +
    "						</div>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label ng-class=\"{activeLabel : uploadClick}\">Selecciona un servicio</label>\n" +
    "					</div>			  \n" +
    "					<div class=\"group\">      \n" +
    "						<input type=\"text\" required>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label>Descríbenos tu proyecto</label>\n" +
    "					</div>\n" +
    "					<div class=\"group\">      \n" +
    "						<div class=\"btn-upload\" ng-click=\"uploadClick=true\" upload-button url=\"/upload\" param=\"file\" data=\"formData\" accept=\"{{acceptTypes}}\" multiple=\"{{allowMultiple}}\" force-iframe-upload=\"{{forceIframeUpload}}\" required=\"true|false\" on-upload=\"onUpload(files)\" on-success=\"onSuccess(response)\" on-error=\"onError(response)\"  on-complete=\"onComplete(response)\">\n" +
    "							<i class=\"fa fa-paperclip fa-2x text-white\"></i>\n" +
    "						</div>\n" +
    "						<input type=\"text\" required>\n" +
    "						<span class=\"highlight\"></span>\n" +
    "						<span class=\"bar\"></span>\n" +
    "						<label ng-class=\"{activeLabel : uploadClick}\">Deseas adjuntar un documento</label>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-12 text-center\">\n" +
    "						<button type=\"button\" ng-click=\"step1=false;step2=false;step3=false;step4=true\" class=\"btn-transparent\">SIGUIENTE</button>\n" +
    "						<br>\n" +
    "						<button class=\"btn-reload mt-20\" ng-click=\"step1=true;step2=false\">\n" +
    "							<i class=\"custom-icon icon-reload\"></i>\n" +
    "						</button>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-xs-12 text-center text-white vertical-align\" ng-show=\"step4\">\n" +
    "			<div class=\"w-50\">\n" +
    "				<i class=\"custom-icon icon-checkmail fa-4x\"></i>\n" +
    "				<h3>¡Gracias por ponerte en contacto con nosotros! Tus datos han sido recepcionados con éxito y muy pronto te contactáremos.</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "	<div class=\"col-lg-4 col-sm-5 col-xs-12 padd-none\">\n" +
    "		<div class=\"mapa\">\n" +
    "			<ng-map zoom=\"15\" center=\"[-33.4414727,-70.6528376]\" styles=\"[{stylers:[{hue: '#628b99'},{visibility:'simplified'},{gamma:1},{weight:1}]},{elementType:'labels',stylers:[{visibility:'on'}]},{featureType:'water',stylers:[{color:'#628b99'}]}]\">\n" +
    "			    <custom-marker id=\"can\" position=\"[-33.4414727,-70.6528376]\" on-click=\"click()\" style=\"text-align; center;\">\n" +
    "			        <img src=\"./assets/images/map-marker-icon.png\" alt=\"\" height=\"35\" width=\"35\">\n" +
    "			        <h4 class=\"mb-0 mt-0 text-center\">3IT</h4>\n" +
    "			    </custom-marker>\n" +
    "			</ng-map>\n" +
    "		</div>\n" +
    "		<div class=\"datos-contacto\">\n" +
    "			<ul class=\"contact-list\">\n" +
    "				<li>\n" +
    "					<i class=\"custom-icon icon-edificio\"></i>\n" +
    "					<a href=\"\">Ahumada 131. <br>\n" +
    "						Oficinas 801, 803, 822, 823. <br>\n" +
    "						Santiago, Chile.</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<i class=\"custom-icon icon-phone\"></i>\n" +
    "					<a href=\"tel:+56942967365\">9 4296 7365</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<i class=\"custom-icon icon-mail\"></i>\n" +
    "					<a href=\"mailto:help@3it.cl\">help@3it.cl</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "</div>");
}]);

angular.module("tres-it/tres-controller/tres.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tres-it/tres-controller/tres.tpl.html",
    "\n" +
    "<!-- SECCION IMAGEN PRINCIPAL  -->\n" +
    "<section ng-parallax pattern=\"'./assets/images/home-background.jpg'\" class=\"relative seccion-parallax\" id=\"inicio\">\n" +
    "    <div class=\"overlap-home\">\n" +
    "        <div class=\"container-fluid relative\">\n" +
    "            <div class=\"linkedin\">\n" +
    "                <a href=\"#\" title=\"Encuéntranos en Linkedin\">\n" +
    "                    <i class=\"fa fa-2x fa-linkedin text-white\"></i>\n" +
    "                    <fa name=\"cog\" animation=\"spin\"></fa>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-offset-8 col-sm-4 v-100\">\n" +
    "                <img src=\"./assets/images/3it-logo.svg\" alt=\"3IT Quality of Service\" class=\"brand-image vertical-center animated fadeIn\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section> <!-- END SECCION IMAGEN PRINCIPAL --> \n" +
    "\n" +
    "\n" +
    "<!-- SECCION MISION - VISION - VALORES -->\n" +
    "<div class=\"container-fluid mvv\"  id=\"quienes\">\n" +
    "    <div class=\"row\">\n" +
    "         <span class=\"btn-volver-detalle\">\n" +
    "                        <svg version=\"1.1\" id=\"svg-volver\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "                             viewBox=\"0 0 93.8 91.4\" style=\"enable-background:new 0 0 93.8 91.4;\" xml:space=\"preserve\">\n" +
    "                        <g id=\"circulos-izquierda\">\n" +
    "                            <circle class=\"st0\" cx=\"45.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"35.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"25.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"15.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"5.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        <g id=\"circulos-abajo\">\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"47.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"57.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"67.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"77.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"87.1\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        <path id=\"icono-grande\" class=\"st1\" d=\"M72,2.3c-10.4,0-18.7,8.3-18.7,18.6S61.6,39.5,72,39.5s18.7-8.3,18.7-18.6S82.3,2.3,72,2.3z\n" +
    "                             M78,21.1l-11.7,7.2c-0.2,0.1-0.4-0.1-0.3-0.3l4.5-7c0-0.1,0-0.1,0-0.2l-4.5-7c-0.1-0.2,0.1-0.4,0.3-0.3L78,20.7\n" +
    "                            C78.1,20.8,78.1,21,78,21.1z\"/>\n" +
    "                        </svg>\n" +
    "                    </span>\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-none\">\n" +
    "            <slick dots=\"true\"\n" +
    "                       infinite=\"false\"\n" +
    "                       speed=\"300\"\n" +
    "                       slides-to-show=\"1\"\n" +
    "                       touch-move=\"false\"\n" +
    "                       slides-to-scroll=\"1\">\n" +
    "\n" +
    "        <div ng-repeat=\"r in tres.slides\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "                 <img src=\"{{r.image}}\" alt=\"Image\" class=\"img-mvv\">\n" +
    "\n" +
    "                  <div class=\"description-container\">\n" +
    "                      <h4 class=\"uni-regular-italic animated delay {{r.textoCabeceraAnimacion}}\">{{r.textoCabecera}}</h4>\n" +
    "                      <h2 class=\"uni-heavy animated delaytwo {{r.tituloAnimacion}}\">{{r.titulo}}</h2>\n" +
    "                      <h4 class=\"uni-bold animated {{r.bajadaAnimacion}} delayTres\">{{r.textoBajada}}</h4>\n" +
    "                      <img src=\"{{r.listado}}\" class=\"animated {{r.bajadaAnimacion}} delayTres\">\n" +
    "                  </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    \n" +
    "    </slick>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div> <!-- END SECCION MISION - VISION - VALORES  -->\n" +
    "\n" +
    "\n" +
    "<!-- SECCION SERVICIOS-->\n" +
    "<div class=\"container-fluid servicios\" id=\"goservicios\">\n" +
    "    <div class=\"row\">\n" +
    "         <img src=\"./assets/images/3it-servicios.svg\" width=\"215\" height=\"34\" class=\"logo-3it-servicios\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-none\">\n" +
    "            <slick dots=\"true\"\n" +
    "                       infinite=\"false\"\n" +
    "                       speed=\"300\"\n" +
    "                       slides-to-show=\"1\"\n" +
    "                       touch-move=\"true\"\n" +
    "                       slides-to-scroll=\"1\"\n" +
    "                       mobileFirst=\"true\"\n" +
    "                       respondTo=\"window\"\n" +
    "                       adaptiveHeight=\"true\"\n" +
    "                       variableWidth=\"true\">\n" +
    "\n" +
    "        <div ng-repeat=\"serv in tres.slidesService\">\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0 cont-slider\" style=\"background-image: url({{serv.image}});border-top-color:{{serv.tituloColor}};\">\n" +
    "                <a href=\"javascript:void(0);\" class=\"animated btn-volver-detalle\" ng-click=\"agiles = !agiles\" ng-class=\"agiles ? 'fadeIn' : 'fadeOut visible-hidden'\">\n" +
    "                        <svg version=\"1.1\" id=\"svg-volver\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "                             viewBox=\"0 0 93.8 91.4\" style=\"enable-background:new 0 0 93.8 91.4;\" xml:space=\"preserve\">\n" +
    "                        <path id=\"icono-grande\" class=\"st0\" d=\"M72.1,2c-10.4,0-18.7,8.4-18.7,18.8s8.4,18.8,18.7,18.8s18.8-8.4,18.8-18.8S82.5,2,72.1,2z\n" +
    "                             M83.3,28.8c-0.2,0-0.5-0.1-0.6-0.3c-4.6-5.3-11.3-4.1-11.3-4.1v3.7c0,0.4-0.3,0.7-0.7,0.7c-0.2,0-0.3-0.1-0.4-0.1l-9.5-7.1\n" +
    "                            c-0.5-0.4-0.6-1.1-0.2-1.6c0.1-0.1,0.1-0.2,0.2-0.2l9.5-7.1c0.3-0.2,0.8-0.2,1,0.1c0.1,0.1,0.2,0.3,0.2,0.5V17\n" +
    "                            c10.3,0,12.3,7.2,12.6,11C84,28.4,83.7,28.8,83.3,28.8z\"/>\n" +
    "                        <g id=\"circulos-izquierda\" style=\"fill:{{serv.tituloColor}};\">\n" +
    "                            <circle class=\"st0\" cx=\"45.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"35.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"25.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"15.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"5.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        <g id=\"circulos-abajo\" style=\"fill:{{serv.tituloColor}};\">\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"47.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"57.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"67.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"77.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"87.1\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        </svg>\n" +
    "                    </a>\n" +
    "                <div class=\"description-container animated {{serv.tituloClase}}\" ng-class=\"agiles ? 'fadeOutLeft visible-hidden' : 'fadeIn'\">\n" +
    "                      <h2 class=\"uni-heavy\" style=\"color:{{serv.tituloColor}};\">\n" +
    "                        {{serv.titulo}}\n" +
    "                        </h2>\n" +
    "                        <p class=\"text-white uni-bold\">{{serv.descripcion}}</p>\n" +
    "                        <button class=\"btn btn-it-base clear\" style=\"border-color:{{serv.tituloColor}};\" ng-click=\"agiles = !agiles \" >{{serv.botonText}}</button>\n" +
    "                    </div>  \n" +
    "                \n" +
    "                  <div class=\"info-detalle animated text-center\" ng-class=\"agiles ? 'fadeInUp' : 'visible-hidden fadeInDown'\" style=\"background-color:{{serv.tituloColor}};\">\n" +
    "                     <h2 class=\"uni-heavy\">\n" +
    "                        {{serv.tituloDetalle}}\n" +
    "                    </h2>\n" +
    "                    <h4 class=\"text-white uni-bold\">{{serv.textoDetalle}}</h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    \n" +
    "    </slick>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div><!-- END SECCION SERVICIOS  -->\n" +
    "\n" +
    "<!-- SECCION INNOVACION -->\n" +
    "<div class=\"container-fluid innovacion pr-30\" id=\"innovacion\">\n" +
    "    <div class=\"row ml-0 mr-0\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "            <img src=\"./assets/images/3it-innovacion.svg\" width=\"215\" height=\"34\" class=\"logo-3it-seccion\">\n" +
    "\n" +
    "            <a href=\"javascript:void(0);\" class=\"animated btn-volver-detalle\" ng-click=\"inovaDetalle = !inovaDetalle\" ng-class=\"inovaDetalle ? 'fadeIn' : 'fadeOut visible-hidden'\">\n" +
    "                <svg version=\"1.1\" id=\"svg-volver\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "                             viewBox=\"0 0 93.8 91.4\" style=\"enable-background:new 0 0 93.8 91.4;\" xml:space=\"preserve\">\n" +
    "                        <path id=\"icono-grande\" class=\"st0\" d=\"M72.1,2c-10.4,0-18.7,8.4-18.7,18.8s8.4,18.8,18.7,18.8s18.8-8.4,18.8-18.8S82.5,2,72.1,2z\n" +
    "                             M83.3,28.8c-0.2,0-0.5-0.1-0.6-0.3c-4.6-5.3-11.3-4.1-11.3-4.1v3.7c0,0.4-0.3,0.7-0.7,0.7c-0.2,0-0.3-0.1-0.4-0.1l-9.5-7.1\n" +
    "                            c-0.5-0.4-0.6-1.1-0.2-1.6c0.1-0.1,0.1-0.2,0.2-0.2l9.5-7.1c0.3-0.2,0.8-0.2,1,0.1c0.1,0.1,0.2,0.3,0.2,0.5V17\n" +
    "                            c10.3,0,12.3,7.2,12.6,11C84,28.4,83.7,28.8,83.3,28.8z\"/>\n" +
    "                        <g id=\"circulos-izquierda\">\n" +
    "                            <circle class=\"st0\" cx=\"45.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"35.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"25.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"15.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"5.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        <g id=\"circulos-abajo\">\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"47.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"57.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"67.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"77.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"87.1\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                </svg>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-4 col-sm-offset-8 col-md-4 col-md-offset-8 col-lg-3 col-lg-offset-9 informacion text-right animated\" ng-class=\"inovaDetalle ? 'fadeOut visible-hidden' : 'fadeInRight'\">\n" +
    "            <h2 class=\"uni-heavy\">\n" +
    "                3IT Labs\n" +
    "            </h2>\n" +
    "            <p class=\"text-white uni-bold\">dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n" +
    "            <button class=\"btn btn-it-base\" ng-click=\"inovaDetalle = !inovaDetalle\">VER MÁS</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 info-detalle animated text-center\" ng-class=\"inovaDetalle ? 'fadeInUp' : 'visible-hidden fadeInDown' \">\n" +
    "             <h2 class=\"uni-heavy\">\n" +
    "                3IT Labs\n" +
    "            </h2>\n" +
    "            <h4 class=\"text-white uni-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n" +
    "            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
    "            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n" +
    "            consequat.</h4>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!-- END SECCION INNOVACION -->\n" +
    "\n" +
    "<!-- SECCION MARCAS -->\n" +
    "\n" +
    "<div class=\"container-fluid seccion-marcas\" id=\"clientes\">\n" +
    "        <div class=\"row listado-marcas animated\" ng-class=\"marcaDetalle ? 'fadeOut listado-inactivo' : 'listado-activo'\">\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-bch\" ng-click=\"marcaDetalle = !marcaDetalle\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-bch.png\" class=\"logo-bch\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-bch.png\" class=\"logo-bch\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-udla\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-udla.png\" class=\"logo-udla\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-udla.png\" class=\"logo-udla\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-intervalores\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-intervalores.png\" class=\"logo-intervalores\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-intervalores.png\" class=\"logo-intervalores\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-aiep\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-aiep.png\" class=\"logo-aiep\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-aiep.png\" class=\"logo-aiep\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-credichile\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-credichile.png\" class=\"logo-credichile\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-credichile.png\" class=\"logo-credichile\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4 marca marca-er\">\n" +
    "                <a href=\"\">\n" +
    "                    <div class=\"bg1\"></div>\n" +
    "                    <div class=\"bg2\"></div>\n" +
    "                    <i class=\"i1\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-er.png\" class=\"logo-er\">\n" +
    "                    </i>\n" +
    "                    <i class=\"i2\">\n" +
    "                        <img src=\"../assets/images/marcas/logo-er.png\" class=\"logo-er\">\n" +
    "                    </i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "      \n" +
    "\n" +
    "    <div class=\"row animated\" ng-class=\"marcaDetalle ? 'fadeIn' : 'container-detalle-marca fadeOut'\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-none cont-slider\"> \n" +
    "            <slick dots=\"false\"\n" +
    "                       infinite=\"false\"\n" +
    "                       speed=\"300\"\n" +
    "                       slides-to-show=\"1\"\n" +
    "                       touch-move=\"false\"\n" +
    "                       slides-to-scroll=\"1\"\n" +
    "                       arrows=\"true\">\n" +
    "           \n" +
    "\n" +
    "                <div ng-repeat=\"mark in tres.slidesMarcas\">\n" +
    "                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 slider-detalle pl-0 pr-0\" style=\"background-image: url({{mark.fondoMarca}});border-top-color:{{mark.colorMarca}};\">\n" +
    "\n" +
    "                          <div class=\"description-container animated {{mark.tituloClase}}\">\n" +
    "                                  <img src=\"{{mark.logoEmpresa}}\" class=\"logo-empresa\">\n" +
    "                                  <p class=\"uni-regular ng-binding mt-20 mb-0\"><span class=\"uni-bold\">Proyecto:</span> {{mark.proyecto}}</p>\n" +
    "                                  <p class=\"uni-regular mb-20\"><span class=\"uni-bold\">Año:</span> {{mark.year}}</p>\n" +
    "                                  <p><span class=\"uni-bold\">Descripción:</span> {{mark.descripcion}}</p>\n" +
    "                              </div>\n" +
    "                           \n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <span class=\"boton-cerrar\" ng-click=\"marcaDetalle = !marcaDetalle\" >\n" +
    "                    <button><i class=\"close\"></i></button>\n" +
    "                </span>\n" +
    "            \n" +
    "            </slick>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "<!-- END SECCION MARCAS -->\n" +
    "\n" +
    "");
}]);

angular.module('templates-common', ['templates/footer.tpl.html', 'templates/header.tpl.html']);

angular.module("templates/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/footer.tpl.html",
    "<footer class=\"footer-empresa hidden-print\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3\">\n" +
    "                <h3>Banco Chile</h3>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n" +
    "                <ul class=\"list-unstyled\">\n" +
    "                    <li>Casa Matriz: Ahumada 251, Santiago de Chile </li>\n" +
    "                    <li>Mesa Central: +56 2 265 311 11</li>\n" +
    "                    <li> <a href=\"http://ww3.bancochile.cl/wps/wcm/connect/personas/portal/seguridad/consejos-de-seguridad\" target=\"_blank\"> Políticas de Privacidad y Seguridad </a> </li>\n" +
    "                    <li><a href=\"assets/documentos/Codigo-de-Conducta-y-Buenas-Practicas-de-Bancos-e-Instituciones-Financieras.pdf\" target=\"_blank\"> Código de Conducta y Buenas Prácticas de Bancos e Instituciones Financieras </a></li>\n" +
    "                    <li><a href=\"assets/documentos/Guia-del-Cliente-Bancario-SBIF.pdf\" target=\"_blank\"> Guía del Cliente Bancario SBIF </a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-3 col-md-4 col-lg-4\">\n" +
    "                <ul class=\"list-unstyled\">\n" +
    "                    <li><strong>Horarios de Atención:</strong></li>\n" +
    "                    <li><strong>Lunes a Viernes de 8:00 a 19:15 hrs</strong></li>\n" +
    "                    <li><span class=\"dot\">*</span> <p> Para consulta de Pago de Impuestos, los dias 12 y 20 de cada mes el horario de atención se extiende hasta las 24 horas.</p></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("templates/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/header.tpl.html",
    "<header class=\"bch-empresa-header  hidden-print\">\n" +
    "	<div class=\"container\">\n" +
    "		<img src=\"assets/images/head.jpg\" alt=\"\">\n" +
    "	</div>\n" +
    "</header>\n" +
    "\n" +
    "<section  class=\"bch-empresas-nav  hidden-print\">\n" +
    "	<div class=\"container\">\n" +
    "		<nav class=\"nav-vtwo\" role=\"navigation\">\n" +
    "			<ul class=\"nav nav-pills\">\n" +
    "				<li class=\"bch-nav-dropdown\">\n" +
    "					<a href=\"#\">Inicio</a>\n" +
    "				</li>\n" +
    "				<li class=\"bch-nav-dropdown\">\n" +
    "					<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Banco<span class=\"ion-chevron-down\"></span></a>\n" +
    "					<div class=\"subitems-menu-container\" role=\"menu\">\n" +
    "						<ul class=\"list-unstyled cont-padres-links\">\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0);\" ui-sref=\"bancoChile\">\n" +
    "									Banco Chile\n" +
    "								</a>\n" +
    "							</li>\n" +
    "\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0);\">\n" +
    "									About\n" +
    "								</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "\n" +
    "				<li class=\"bch-nav-dropdown\">\n" +
    "					<a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Admin. y Seguridad<span class=\"ion-chevron-down\"></span></a>\n" +
    "					<div class=\"subitems-menu-container\" role=\"menu\">\n" +
    "						<ul class=\"list-unstyled cont-padres-links\">\n" +
    "							<li>\n" +
    "								<a href=\"javascript:void(0);\">\n" +
    "									Cambio de clave\n" +
    "								</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</nav>\n" +
    "	</div>\n" +
    "</section>");
}]);

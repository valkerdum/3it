angular.module('templates-common', ['templates/footer.tpl.html', 'templates/header.tpl.html']);

angular.module("templates/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/footer.tpl.html",
    "");
}]);

angular.module("templates/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/header.tpl.html",
    "<button class=\"navbar-toggler navbar-toggler-right\"  data-toggle=\"collapse\" id=\"nav-icon\" type=\"button\" ng-click=\"open = !open\" ng-class=\"open ? 'toggle-open' : 'toggle-close' \">\n" +
    "    <span class=\"ico\">\n" +
    "        <i></i>\n" +
    "        <i></i>\n" +
    "        <i></i>\n" +
    "    </span>\n" +
    "</button>\n" +
    "\n" +
    "<div class=\"nav-bar\" ng-class=\"open ? 'open' : 'close' \">\n" +
    "    <ul class=\"text-center\">\n" +
    "        <li><a href=\"\">Inicio</a></li>\n" +
    "        <li><a href=\"\">Nosotros</a></li>\n" +
    "        <li><a href=\"\">Servicios</a></li>\n" +
    "        <li><a href=\"\">Innovación</a></li>\n" +
    "        <li><a href=\"\">Clientes</a></li>\n" +
    "        <li><a href=\"\">Contacto</a></li>\n" +
    "        <li><a href=\"\" class=\"underline-none\"><i class=\"fa fa-linkedin fa-lg\"></i></a></li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

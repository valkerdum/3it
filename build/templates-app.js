angular.module('templates-app', ['banco-chile/banco-controller/bancochile.tpl.html']);

angular.module("banco-chile/banco-controller/bancochile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("banco-chile/banco-controller/bancochile.tpl.html",
    "\n" +
    "<!-- SECCION IMAGEN PRINCIPAL  -->\n" +
    "\n" +
    "<section ng-parallax pattern=\"'./assets/images/home-background.jpg'\" class=\"relative seccion-parallax\">\n" +
    "    <div class=\"overlap-home\">\n" +
    "        <div class=\"container-fluid relative\">\n" +
    "            <div class=\"linkedin\">\n" +
    "                <a href=\"#\" title=\"Encuéntranos en Linkedin\">\n" +
    "                    <i class=\"fa fa-2x fa-linkedin text-white\"></i>\n" +
    "                    <fa name=\"cog\" animation=\"spin\"></fa>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-offset-8 col-sm-4 v-100\">\n" +
    "                <img src=\"./assets/images/3it-logo.svg\" alt=\"3IT Quality of Service\" class=\"brand-image vertical-center\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section> <!-- END SECCION IMAGEN PRINCIPAL --> \n" +
    "\n" +
    "\n" +
    "<!-- SECCION MISION - VISION - VALORES -->\n" +
    "<div class=\"container-fluid seccion-marcas\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-none\">\n" +
    "            <ui-carousel slides=\"banco.slides\" on-init=\"banco.onCarouselInit()\" slides-to-show=\"1\" slides-to-scroll=\"1\"  dots=\"true\" arrows=\"false\">\n" +
    "                <carousel-item>\n" +
    "                  <!-- <h2>{{ item.title }}</h2> -->\n" +
    "                  <img src=\"{{ item.image }}\" alt=\"Image\" />\n" +
    "              </carousel-item>                  \n" +
    "          </ui-carousel>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div> <!-- END SECCION MISION - VISION - VALORES  -->\n" +
    "\n" +
    "\n" +
    "<!-- SECCION SERVICIOS-->\n" +
    "<div class=\"container-fluid servicios\">\n" +
    "    <div class=\"row\">\n" +
    "         <img src=\"./assets/images/3it-servicios.svg\" width=\"215\" height=\"34\" class=\"logo-3it-servicios\">\n" +
    "        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 padd-none\" >\n" +
    "            <ui-carousel slides=\"banco.slidesService\" on-init=\"banco.onCarouselInit()\" slides-to-show=\"1\" slides-to-scroll=\"1\"  dots=\"true\" arrows=\"false\" >\n" +
    "                <carousel-item>\n" +
    "                    <a href=\"javascript:void(0);\" class=\"animated btn-volver-detalle\" ng-click=\"agiles = !agiles\" ng-class=\"agiles ? 'fadeIn' : 'fadeOut visible-hidden'\">\n" +
    "                        <svg version=\"1.1\" id=\"svg-volver\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "                             viewBox=\"0 0 93.8 91.4\" style=\"enable-background:new 0 0 93.8 91.4;\" xml:space=\"preserve\">\n" +
    "                        <path id=\"icono-grande\" class=\"st0\" d=\"M72.1,2c-10.4,0-18.7,8.4-18.7,18.8s8.4,18.8,18.7,18.8s18.8-8.4,18.8-18.8S82.5,2,72.1,2z\n" +
    "                             M83.3,28.8c-0.2,0-0.5-0.1-0.6-0.3c-4.6-5.3-11.3-4.1-11.3-4.1v3.7c0,0.4-0.3,0.7-0.7,0.7c-0.2,0-0.3-0.1-0.4-0.1l-9.5-7.1\n" +
    "                            c-0.5-0.4-0.6-1.1-0.2-1.6c0.1-0.1,0.1-0.2,0.2-0.2l9.5-7.1c0.3-0.2,0.8-0.2,1,0.1c0.1,0.1,0.2,0.3,0.2,0.5V17\n" +
    "                            c10.3,0,12.3,7.2,12.6,11C84,28.4,83.7,28.8,83.3,28.8z\"/>\n" +
    "                        <g id=\"circulos-izquierda\" style=\"fill:{{item.tituloColor}};\">\n" +
    "                            <circle class=\"st0\" cx=\"45.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"35.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"25.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"15.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"5.8\" cy=\"20.8\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        <g id=\"circulos-abajo\" style=\"fill:{{item.tituloColor}};\">\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"47.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"57.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"67.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"77.1\" r=\"3.1\"/>\n" +
    "                            <circle class=\"st0\" cx=\"72.1\" cy=\"87.1\" r=\"3.1\"/>\n" +
    "                        </g>\n" +
    "                        </svg>\n" +
    "                    </a>\n" +
    "                    <div class=\"description-container animated {{item.tituloClase}}\" ng-class=\"agiles ? 'fadeOutLeft visible-hidden' : 'fadeIn'\">\n" +
    "                      <h2 class=\"uni-heavy\" style=\"color:{{item.tituloColor}};\">\n" +
    "                        {{item.titulo}}\n" +
    "                        </h2>\n" +
    "                        <p class=\"text-white uni-bold\">{{item.descripcion}}</p>\n" +
    "                        <button class=\"btn btn-it-base clear\" style=\"border-color:{{item.tituloColor}};\" ng-click=\"agiles = !agiles\" >{{item.botonText}}</button>\n" +
    "                    </div>  \n" +
    "                  <img src=\"{{ item.image }}\" alt=\"Image\" class=\"img-slider\" style=\"border-top-color:{{item.tituloColor}};\" />\n" +
    "\n" +
    "                  <div class=\"info-detalle animated text-center\" ng-class=\"agiles ? 'fadeInUp' : 'visible-hidden fadeInDown'\" style=\"background-color:{{item.tituloColor}};\">\n" +
    "                     <h2 class=\"uni-heavy\">\n" +
    "                        {{item.tituloDetalle}}\n" +
    "                    </h2>\n" +
    "                    <h4 class=\"text-white uni-bold\">{{item.textoDetalle}}</h4>\n" +
    "                </div>\n" +
    "                </carousel-item>      \n" +
    "          </ui-carousel>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div> <!-- END SECCION SERVICIOS  -->\n" +
    "\n" +
    "<!-- SECCION INNOVACION -->\n" +
    "<div class=\"container-fluid innovacion pr-30\">\n" +
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
    "<div class=\"container-fluid seccion-marcas\">\n" +
    "        <div class=\"row listado-marcas\">\n" +
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-bch\">\n" +
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
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-udla\">\n" +
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
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-intervalores\">\n" +
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
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-aiep\">\n" +
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
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-credichile\">\n" +
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
    "            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 marca marca-er\">\n" +
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
    "  </div>\n" +
    "\n" +
    "\n" +
    "");
}]);

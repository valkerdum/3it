angular.module('templates-app', ['banco-chile/banco-controller/bancochile.tpl.html']);

angular.module("banco-chile/banco-controller/bancochile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("banco-chile/banco-controller/bancochile.tpl.html",
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
    "        <div class=\"row detalle-marcas\">\n" +
    "            <div class=\"header-acciones credichile\">\n" +
    "                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right\">\n" +
    "                    <i class=\"ion-arrow-rightœ\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n" +
    "                <ui-carousel slides=\"banco.slides\" on-init=\"banco.onCarouselInit()\" slides-to-show=\"1\" slides-to-scroll=\"1\">\n" +
    "                    <carousel-item>\n" +
    "                      <h2>{{ item.title }}</h2>\n" +
    "                      <img src=\"{{ item.image }}\" alt=\"Image\" />\n" +
    "                  </carousel-item>\n" +
    "                  <carousel-prev>\n" +
    "                      <button>Prev</button>\n" +
    "                  </carousel-prev>\n" +
    "\n" +
    "                  <carousel-next>\n" +
    "                      <button>next</button>\n" +
    "                  </carousel-next>\n" +
    "              </ui-carousel>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "");
}]);

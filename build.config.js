/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    /**
     * The `build_dir` folder is where our projects are compiled during
     * development and the `compile_dir` folder is where our app resides once it's
     * completely built.
     */
    build_dir: 'build',
    compile_dir: 'bin',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `ctpl` contains
     * our reusable components' (`src/common`) template HTML files, while
     * `atpl` contains the same, but for our app's code. `html` is just our
     * main HTML file, `less` is our main stylesheet, and `unit` contains our
     * app's unit tests.
     */
    app_files: {
        modjs: ['src/**/*.module.js'],
        configjs: ['src/**/*.config.js'],
        js: ['src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js', '!src/assets/**/*.config.js', '!src/assets/**/*.module.js'],
        jsunit: ['src/**/*.spec.js'],

        atpl: ['src/app/**/*.tpl.html'],
        btpl: ['vendor/orion-*/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        html: ['src/index.html'],
        less: 'src/less/main.less',
        stylus_folder: 'src/stylus/',
        stylus_vendor_folders: 'vendor/orion-*/stylus/'

    },

    /**
     * This is a collection of files used during testing only.
     */
    test_files: {
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.assets` property holds any assets to be copied along
     * with our app's assets. This structure is flattened, so it is not
     * recommended that you use wildcards.
     */
    vendor_files: {
        js: [
            'vendor/jquery/dist/jquery.js',
            'vendor/angular/angular.js',
            'vendor/angular-local-storage/dist/angular-local-storage.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/angular-ui-utils/modules/route/route.js',
            'vendor/modernizr/modernizr.js',
            'vendor/angular-file-upload/angular-file-upload.js',
            'vendor/angular-i18n/angular-locale_es-cl.js',
            'vendor/angular-rut/dist/angular-rut.js',
            'vendor/angular-ui-utils/ui-utils.js',
            'vendor/lodash/dist/lodash.js',
            'vendor/angular-tablesort/js/angular-tablesort.js',
            'vendor/angular-resource/angular-resource.js',
            'vendor/angular-ui-select/dist/select.js',
            'vendor/angular-animate/angular-animate.js',
            'vendor/orion-*/**/*.module.js',
            'vendor/angular-rangeslider/angular.rangeSlider.js',
            'vendor/ladda/js/spin.js',
            'vendor/ladda/js/ladda.js',
            'vendor/angular-ladda/dist/angular-ladda.min.js',
            'vendor/ng-scrollbar/dist/ng-scrollbar.js',
            'vendor/highcharts/highcharts.src.js',
            'vendor/highcharts-ng/dist/highcharts-ng.js',
            'vendor/sweetalert-ui/lib/sweet-alert.js',
            'vendor/orion-*/**/*.js',
            'vendor/angular-off-click/dist/angular-off-click.js',
            'vendor/angular-ui-carousel/dist/ui-carousel.min.js',
            'vendor/ng-simple-parallax/src/ngParallax.min.js',
            'vendor/angular-slick/dist/slick.js',
            'vendor/angular-slick-carousel/dist/angular-slick.js',
            'vendor/slick-carousel/slick/slick.js',
            'vendor/ngmap/build/scripts/ng-map.min.js',
            'vendor/angular-scroll/angular-scroll.js',
            'vendor/angular-upload/angular-upload.min.js',
            'vendor/angular-recaptcha/release/angular-recaptcha.js',
            'vendor/angular-aria/angular-aria.js',
            'vendor/angular-material/angular-material.js'
        ],
        css: [
            'vendor/angular-ui-select/dist/select.css',
            'vendor/ng-scrollbar/dist/ng-scrollbar.css',
            'vendor/ionicons/css/ionicons.css',
            'vendor/angular-rangeslider/angular.rangeSlider.css',
            'vendor/ladda/dist/ladda-themeless.min.css',
            'vendor/sweetalert-ui/lib/sweet-alert.css',
            'vendor/angular-ui-carousel/dist/ui-carousel.min.css',
            'vendor/animate.css/animate.min.css',
            'vendor/slick-carousel/slick/slick.css',
            'vendor/slick-carousel/slick/slick-theme.css',
            'vendor/material-design-icons/icofont/material-icons.css',
            'vendor/angular-upload/src/directives/btnUpload.min.css'
        ],
        assets: [
            'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
            'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
            'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
            'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
            'vendor/orion-*/assets/**',
            'vendor/slick-carousel/slick/*.gif'
        ],
        fonts: [
            'vendor/ionicons/fonts/ionicons.eot',
            'vendor/ionicons/fonts/ionicons.svg',
            'vendor/ionicons/fonts/ionicons.ttf',
            'vendor/ionicons/fonts/ionicons.woff',
            'vendor/slick-carousel/slick/fonts/slick.eot',
            'vendor/slick-carousel/slick/fonts/slick.svg',
            'vendor/slick-carousel/slick/fonts/slick.ttf',
            'vendor/slick-carousel/slick/fonts/slick.woff',
            'vendor/angular-ui-carousel/dist/fonts/ui-carousel.svg',
            'vendor/angular-ui-carousel/dist/fonts/ui-carousel.eot',
            'vendor/angular-ui-carousel/dist/fonts/ui-carousel.ttf',
            'vendor/angular-ui-carousel/dist/fonts/ui-carousel.woff'
        ]
    }
};

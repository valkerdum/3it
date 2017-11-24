module.exports = function (grunt) {

    /**
     * Load required Grunt tasks. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-conventional-changelog');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-browser-sync');

    /**
     * Load in our build configuration file.
     */
    var userConfig = require('./build.config.js');

    /**
     * This is the configuration object Grunt uses to give each plugin its
     * instructions.
     */
    var taskConfig = {
        /**
         * We read in our `package.json` file so we can access the package name and
         * version. It's already there, so we don't repeat ourselves here.
         */
        pkg: grunt.file.readJSON("package.json"),

        /**
         * The banner is the comment that is placed at the top of our compiled
         * source files. It is first processed as a Grunt template, where the `<%=`
         * pairs are evaluated based on this very configuration object.
         */
        meta: {
            banner: '/**\n' +
            ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n'
        },

        /**
         * Increments the version number, etc.
         */
        bump: {
            options: {
                files: [
                    "package.json",
                    "bower.json"
                ],
                commit: false,
                commitMessage: 'chore(release): v%VERSION%',
                commitFiles: [
                    "package.json",
                    "client/bower.json"
                ],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'origin'
            }
        },

        /**
         * The directories to delete when `grunt clean` is executed.
         */
        clean: {
            build: [
                '<%= build_dir %>',
                '<%= compile_dir %>'
            ],
            css: ['<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css'],
            clean_concat_css: ['<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css']
        },


        /**
         * The `copy` task just copies files from A to B. We use it here to copy
         * our project assets (images, fonts, etc.) and javascripts into
         * `build_dir`, and then to copy the assets to `compile_dir`.
         */
        copy: {
            build_app_assets: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= build_dir %>/assets/',
                        cwd: 'src/assets',
                        expand: true
                    }
                ]
            },

            build_fonts: {
                files: [
                    {
                        src: ['<%= vendor_files.fonts %>'],
                        dest: '<%= build_dir %>/assets/fonts',
                        expand: true,
                        rename: function (dest, src) {
                            src = src.split('/');
                            src = src[3];
                            return dest + '/' + src;
                        }
                    }
                ]
            },

            build_vendor_assets: {
                files: [
                    {
                        src: ['<%= vendor_files.assets %>'],
                        dest: '<%= build_dir %>/assets/',
                        cwd: '.',
                        expand: true,
                        filter: 'isFile',
                        rename: function (dest, src) {
                            var path = require('path');

                            // Get the name of the component folder (or first folder in src path)
                            var component = src.split("/").slice(1, 2)[0];
                            // console.log("path es : " + component);

                            if (component.indexOf("orion-") != -1) {
                                // console.log("viene orion");
                                var dir_relativo = src.split("/assets/").slice(1, 2)[0];
                                // console.log("path final es :"+ dir_relativo);
                                return path.join(dest, dir_relativo);
                            }
                            else {
                                // console.log("no viene orion");
                                // console.log("path final es :"+ path.basename(src));
                                return path.join(dest, path.basename(src));

                            }


                        }
                    }
                ]
            },
            build_appjs: {
                files: [
                    {
                        src: ['<%= app_files.modjs %>', '<%= app_files.configjs %>', '<%= app_files.js %>'],
                        dest: '<%= build_dir %>/',
                        filter: filtroPorMarca("js"),
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            build_vendorjs: {
                files: [
                    {
                        src: ['<%= vendor_files.js %>'],
                        dest: '<%= build_dir %>/',
                        filter: filtroPorMarca("js"),
                        cwd: '.',
                        expand: true
                    }
                ]
            },
            compile_assets: {
                files: [
                    {
                        src: ['**'],
                        dest: '<%= compile_dir %>/assets',
                        cwd: '<%= build_dir %>/assets',
                        expand: true
                    }
                ]
            }
        },

        /**
         * `grunt concat` concatenates multiple source files into a single file.
         */
        concat: {
            /**
             * The `build_css` target concatenates compiled CSS and vendor CSS
             * together.
             */
            build_css: {
                src: [
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css',
                    '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css'
                ],
                dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
            },
            /**
             * The `compile_js` target is the concatenation of our application source
             * code and all specified vendor source code into a single file.
             */
            compile_js: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                src: [
                    '<%= vendor_files.js %>',
                    'module.prefix',
                    '<%= app_files.modjs %>',
                    '<%= app_files.configjs %>',
                    '<%= app_files.js %>',
                    //'<%= build_dir %>/src/**/*.js',
                    '<%= html2js.app.dest %>',
                    '<%= html2js.orion.dest %>',
                    '<%= html2js.common.dest %>',
                    'module.suffix'
                ],
                dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },


        /**
         * `ng-min` annotates the sources before minifying. That is, it allows us
         * to code without the array syntax.
         */
        ngmin: {
            compile: {
                files: [
                    {
                        src: ['<%= app_files.modjs %>', '<%= app_files.configjs %>', '<%= app_files.js %>'],
                        cwd: '<%= build_dir %>',
                        dest: '<%= build_dir %>',
                        expand: true
                    }
                ]
            }
        },

        /**
         * Minify the sources!
         */
        uglify: {
            compile: {
                options: {
                    banner: '<%= meta.banner %>',
                    mangle: false
                },
                files: {
                    '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
                }
            }
        },

        /**
         * `grunt-contrib-less` handles our LESS compilation and uglification automatically.
         * Only our `main.less` file is included in compilation; all other files
         * must be imported from this file.
         */
        less: {
            build: {
                files: {
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
                }
            },
            compile: {
                files: {
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css': '<%= app_files.less %>'
                },
                options: {
                    cleancss: true,
                    compress: true
                }
            }
        },

        stylus: {
            build: {
                files: [
                    {
                        src: [
                            '<%= app_files.stylus_folder %>*.styl',
                            '<%= app_files.stylus_vendor_folders %>*.styl'
                        ],// compile and concat into single file
                        dest: '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css',
                        filter: filtroPorMarca('styl')
                    }
                ]
            },
            compile: {
                options: true,
                files: [
                    {
                        src: [
                            '<%= app_files.stylus_folder %>*.styl',
                            '<%= app_files.stylus_vendor_folders %>*.styl'
                        ],// compile and concat into single file
                        dest: '<%= build_dir %>/assets/<%= pkg.name %>--<%= pkg.version %>.css',
                        filter: filtroPorMarca('styl')
                    }
                ]
            }
        },

        // browserSync: {
        //     bsFiles: {
        //         src : '<%= build_dir %>/assets/*.css'
        //     },
        //     options: {
        //        // watchTask: true, error but what?
        //         server: {
        //             baseDir: "<%= build_dir %>"
        //         }
        //     }
        // },


        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '<%= build_dir %>/assets/*.css',
                        '<%= build_dir %>/assets/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: '<%= build_dir %>'
                }
            }
        },

        /**
         * `jshint` defines the rules of our linter as well as which files we
         * should check. This file, all javascript sources, and all our unit tests
         * are linted based on the policies listed in `options`. But we can also
         * specify exclusionary patterns by prefixing them with an exclamation
         * point (!); this is useful when code comes from a third party but is
         * nonetheless inside `src/`.
         */
        jshint: {
            src: [
                '<%= app_files.modjs %>', '<%= app_files.configjs %>', '<%= app_files.js %>'
            ],
            test: [
                '<%= app_files.jsunit %>'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            options: {
                curly: true,
                immed: true,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true
            },
            globals: {}
        },

        /**
         * HTML2JS is a Grunt plugin that takes all of your template files and
         * places them into JavaScript files as strings that are added to
         * AngularJS's template cache. This means that the templates too become
         * part of the initial payload as one JavaScript file. Neat!
         */
        html2js: {
            /**
             * These are the templates from `src/app`.
             */
            app: {
                options: {
                    base: 'src/app'
                },
                files: [
                    {
                        src: [ '<%= app_files.atpl %>' ],
                        dest: '<%= build_dir %>/templates-app.js',
                        filter: filtroPorMarca("tpl.html")
                    }
                ]
            },

            orion: {
                options: {
                    base: 'vendor'
                },
                files: [
                    {
                        src: [ '<%= app_files.btpl %>' ],
                        dest: '<%= build_dir %>/templates-orion.js',
                        filter: filtroPorMarca("tpl.html")
                    }
                ]
                //     expand: true,
                //      filter: 'isFile',
                // rename: function(dest, src) {
                //           var path = require('path');

                //           // Get the name of the component folder (or first folder in src path)
                //           var component = src.split("/").slice(1, 2)[0];
                //           var cadena_directorio = "";
                //           if(component.indexOf("orion-") !=-1)
                //           {
                //             cadena_directorio = src.split("/").slice(2).join();
                //             console.log(cadena_directorio);
                //           }

                //           return path.join(dest, cadena_directorio);


                //     }
            },


            /**
             * These are the templates from `src/common`.
             */
            common: {
                options: {
                    base: 'src/common'
                },
                files: [
                    {
                        src: [ '<%= app_files.ctpl %>' ],
                        dest: '<%= build_dir %>/templates-common.js',
                        filter: filtroPorMarca("tpl.html")
                    }
                ]
            }
        },

        /**
         * Strings replace
         */

        'string-replace': {

            single_file: {
                files: {
                    '<%= build_dir %>/templates-orion.js': '<%= build_dir %>/templates-orion.js'
                },
                options: {
                    replacements: [{
                        pattern: /orion-/g,
                        //pattern: "/orion-/g",
                        replacement: ''
                    }]
                }
            },

            stylus: {
                files: [{
                    expand: true,
                    cwd: './',
                    dest: './',
                    src: ['<%= app_files.stylus_orion %>*.styl']
                }],
                options: {
                    replacements: [{
                        pattern: /(@import.*)\/orion-ui-empresas\//,
                        replacement: '$1/orion-ui-empresas_' + grunt.option("marca") + '/'
                    }]
                }
            }
        },


        /**
         * The Karma configurations.
         */
        karma: {
            options: {
                configFile: '<%= build_dir %>/karma-unit.js'
            },
            unit: {
                port: 9019,
                background: true
            },
            continuous: {
                singleRun: true
            }
        },

        /**
         * The `index` task compiles the `index.html` file as a Grunt template. CSS
         * and JS files co-exist here but they get split apart later.
         */
        index: {

            /**
             * During development, we don't want to have wait for compilation,
             * concatenation, minification, etc. So to avoid these steps, we simply
             * add all script files directly to the `<head>` of `index.html`. The
             * `src` property contains the list of included files.
             */
            build: {
                dir: '<%= build_dir %>',
                src: [
                    '<%= vendor_files.js %>',
                    '<%= app_files.modjs %>',
                    '<%= app_files.configjs %>',
                    '<%= app_files.js %>',
                    'templates-*.js',
                    'assets/*.css'
                ],
                expand: true,
                cwd: '<%= build_dir %>/'
            },

            /**
             * When it is time to have a completely compiled application, we can
             * alter the above to include only a single JavaScript and a single CSS
             * file. Now we're back!
             */
            compile: {
                dir: '<%= compile_dir %>',
                src: [
                    '<%= concat.compile_js.dest %>',
                    '<%= vendor_files.css %>',
                    '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css'
                ]
            }
        },

        /**
         * This task compiles the karma template so that changes to its file array
         * don't have to be managed manually.
         */
        karmaconfig: {
            unit: {
                dir: '<%= build_dir %>',
                src: [
                    '<%= vendor_files.js %>',
                    //'<%= html2js.app.dest %>',
                    '<%= html2js.orion.dest %>',
                    '<%= html2js.common.dest %>',
                    '<%= test_files.js %>'
                ]
            }
        },

        /**
         * And for rapid development, we have a watch set up that checks to see if
         * any of the files listed below change, and then to execute the listed
         * tasks when they do. This just saves us from having to type "grunt" into
         * the command-line every time we want to see what we're working on; we can
         * instead just leave "grunt watch" running in a background terminal. Set it
         * and forget it, as Ron Popeil used to tell us.
         *
         * But we don't need the same thing to happen for all the files.
         */
        delta: {
            /**
             * By default, we want the Live Reload to work for all tasks; this is
             * overridden in some tasks (like this file) where browser resources are
             * unaffected. It runs by default on port 35729, which your browser
             * plugin should auto-detect.
             */
            options: {
                livereload: true
            },

            /**
             * When the Gruntfile changes, we just want to lint it. In fact, when
             * your Gruntfile changes, it will automatically be reloaded!
             */
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
                options: {
                    livereload: true
                }
            },

            /**
             * When our JavaScript source files change, we want to run lint them and
             * run our unit tests.
             */
            jssrc: {
                files: [
                    '<%= app_files.modjs %>', '<%= app_files.configjs %>', '<%= app_files.js %>'
                ],
                // tasks: [ 'jshint:src', 'karma:unit:run', 'copy:build_appjs' ]
                tasks: ['jshint:src', 'copy:build_appjs']
            },

            /**
             * When assets are changed, copy them. Note that this will *not* copy new
             * files, so this is probably not very useful.
             */
            assets: {
                files: [
                    'src/assets/**/*'
                ],
                tasks: ['copy:build_app_assets', 'copy:build_vendor_assets', 'copy:build_fonts']
            },

            /**
             * When index.html changes, we need to compile it.
             */
            html: {
                files: ['<%= app_files.html %>'],
                tasks: ['index:build'],
                options: {
                    livereload: true
                }
            },

            /**
             * When our templates change, we only rewrite the template cache.
             */
            tpls: {
                files: [
                    '<%= app_files.atpl %>',
                    '<%= app_files.ctpl %>'
                ],
                tasks: ['html2js', 'string-replace']
            },

            /**
             * When the CSS files change, we need to compile and minify them.
             */
            less: {
                files: ['src/**/*.less'],
                tasks: ['clean:clean_concat_css', 'less:build', 'stylus:build', 'concat:build_css', 'clean:css'],
                options: {
                    livereload: true
                }
            },

            stylus: {
                files: ['src/**/*.styl'],
                tasks: ['clean:clean_concat_css', 'less:build', 'stylus:build', 'concat:build_css', 'clean:css'],
                options: {
                    livereload: true
                }
            },


            /**
             * When a JavaScript unit test file changes, we only want to lint it and
             * run the unit tests. We don't want to do any live reloading.
             */
            jsunit: {
                files: [
                    '<%= app_files.jsunit %>'
                ],
                // tasks: [ 'jshint:test', 'karma:unit:run' ],
                tasks: ['jshint:test'],
                options: {
                    livereload: false
                }
            }

        }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    /**
     * In order to make it safe to just compile or copy *only* what was changed,
     * we need to ensure we are starting from a clean, fresh build. So we rename
     * the `watch` task to `delta` (that's why the configuration var above is
     * `delta`) and then add a new task called `watch` that does a clean build
     * before watching for changes.
     */
    grunt.renameTask('watch', 'delta');
    //grunt.registerTask( 'watch', [ 'build', 'karma:unit', 'delta'] );
    grunt.registerTask('watch', ['build', 'delta']);

    /**
     * The default task is to build and compile.
     */
    grunt.registerTask('default', ['build', 'compile']);

    /**
     * The `build` task gets your app ready to run for development and testing.
     */
    grunt.registerTask('build', [
        'clean:build', 'html2js', 'string-replace', 'jshint', 'less:build', 'stylus:build',
        'concat:build_css', 'copy:build_app_assets', 'copy:build_vendor_assets', 'copy:build_fonts',
        'copy:build_appjs', 'copy:build_vendorjs', 'index:build', 'clean:css'
    ]);


    grunt.registerTask('sync', ['clean:build', 'browserSync', 'watch']);

    /**
     * The `compile` task gets your app ready for deployment by concatenating and
     * minifying your code.
     */
    grunt.registerTask('compile', [
        'less:compile', 'stylus:compile', 'concat:build_css', 'clean:css',
        'copy:compile_assets', 'ngmin', 'concat:compile_js',
        'uglify', 'index:compile'
    ]);

    /**
     * Filtrado personalizado para determinar si el archivo referenciado por filepath debe o no incluirse como miembro
     * del grupo de archivos de extension "ext", considerando que:
     * - Si existen N archivos en el mismo directorio
     * - Estos comparten el mismo nombre excepto por los sufijos: (ninguno), _BCH, _BEC, etc
     * Entonces:
     * - Solo 1 de ellos debe ser incluido
     * - Si la tarea grunt esta configurada para una marca en particular, debe ser incluida la version de la marca
     * - Si no existe la version de la marca entonces se incluye el por defecto (sin sufijo)
     *
     * @param ext extension de archivos a filtrar
     */
    function filtroPorMarca(ext) {
        var fs = require('fs');
        var path = require('path');
        var marcaSeparator = "_";
        var slash = "\\\\/"; //back-slash or forward-slash
        var fileRegex = new RegExp("(.*?)" + marcaSeparator + "?([^" + marcaSeparator + "]+)\\." + ext);
        var dirRegex = new RegExp("vendor[" + slash + "](.*?)" + marcaSeparator + "?([^" + marcaSeparator + slash + "]+)[" + slash + "]");
        var marcaPortal = grunt.option("marca") || "";
        if(!marcaPortal) {
            return function(){ return true; };
        }

        function filtroPorArchivo(filepath){
            var filename = path.basename(filepath);
            var dir = path.dirname(filepath);
            var fileparts = getFileparts(filename, fileRegex);
            if(marcaPortal == fileparts.sufijo) {
                log(marcaPortal, filepath, true);
                return true;
            } else if(fileparts.sufijo && fileparts.sufijo != marcaPortal) {
                //archivo actual es con marca y es distinta a la del portal
                log(marcaPortal, filepath, false, "NOK");
                return false;
            } else {
                //archivo es sin marca
                //solo incluirlo si no existe el archivo con la misma marca portal
                var targetFilename = path.join(dir, fileparts.prefijo + marcaSeparator + marcaPortal + "." + ext);
                if(fs.existsSync(targetFilename)){
                    log(marcaPortal, filepath, false, "NOK. Ya existe el " + ext + " con marca");
                    return false;
                }
                log(marcaPortal, filepath, true, "OK. No existe el " + ext + " con marca");
                return true;
            }
        }

        function log(marcaPortal, filepath, result, msg) {
            var f;
            if(result) {
                f = grunt.verbose;
            } else {
                f = grunt.log;
            }
            f.write("Portal: '" + marcaPortal + "'. ");
            f.write("File: " + filepath + ". ");
            if(result) {
                if(msg) {
                    f.ok(msg);
                } else {
                    f.ok();
                }
            } else {
                f.errorlns(msg);
            }

        }

        function filtroPorDirectorio(filepath) {
            var result = {
                resolved: false,
                resolution: undefined
            };
            //Solo filtrar vendor si son orion
            if(grunt.file.isMatch(["vendor/**"], filepath)) {
                if(grunt.file.isMatch(["vendor/orion-*/**"], filepath)){
                    //si el paquete orion tiene marca se puede resolver si sus archivos son validos o no
                    var dirParts = getFileparts(filepath, dirRegex);
                    grunt.verbose.writeflags(dirParts, "DIRPARTS");
                    if(dirParts.sufijo) {
                        result.resolved = true;
                        result.resolution = dirParts.sufijo == marcaPortal;
                    } else {
                        //si no tiene marca, solo se puede rechazar en caso de que ya exista un paquete con la marca portal
                        if(fs.existsSync("vendor/" + dirParts.prefijo + marcaSeparator + marcaPortal)){
                            result.resolved = true;
                            result.resolution = false;
                        }
                    }
                } else {
                    result.resolved = true;
                    result.resolution = true;
                }
            }
            return result;
        }

        function getFileparts(filename, regex) {
            var filepartsArray = regex.exec(filename);
            var fileparts = {
                prefijo: null,
                sufijo: null
            };
            if(filepartsArray) {
                fileparts.prefijo = filepartsArray[1] ? filepartsArray[1] : filepartsArray[2];
                fileparts.sufijo = filepartsArray[1] ? filepartsArray[2] : "";
            }
            return fileparts;
        }

        return function (filepath) {
            var resultPorDirectorio = filtroPorDirectorio(filepath);
            if(resultPorDirectorio.resolved) {
                log(marcaPortal, filepath, resultPorDirectorio.resolution,
                    resultPorDirectorio.resolution ? "OK. Vendor o orion de la marca" : "NOK. orion de otra marca");

                return resultPorDirectorio.resolution;
            } else {
                return filtroPorArchivo(filepath);
            }
        };
    }

    /**
     * A utility function to get all app JavaScript sources.
     */
    function filterForJS(files) {
        return files.filter(function (file) {
            return file.match(/\.js$/);
        });
    }

    /**
     * A utility function to get all app CSS sources.
     */
    function filterForCSS(files) {
        return files.filter(function (file) {
            return file.match(/\.css$/);
        });
    }

    /**
     * The index.html template includes the stylesheet and javascript sources
     * based on dynamic names calculated in this Gruntfile. This task assembles
     * the list into variables for the template to use and then runs the
     * compilation.
     */
    grunt.registerMultiTask('index', 'Process index.html template', function () {
        var dirRE = new RegExp('^(' + grunt.config('build_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
        var jsFiles = filterForJS(this.filesSrc).map(function (file) {
            return file.replace(dirRE, '');
        });
        var cssFiles = filterForCSS(this.filesSrc).map(function (file) {
            return file.replace(dirRE, '');
        });

        grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
            process: function (contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles,
                        styles: cssFiles,
                        version: grunt.config('pkg.version')
                    }
                });
            }
        });
    });

    /**
     * In order to avoid having to specify manually the files needed for karma to
     * run, we use grunt to manage the list for us. The `karma/*` files are
     * compiled as grunt templates for use by Karma. Yay!
     */
    grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function () {
        var jsFiles = filterForJS(this.filesSrc);

        grunt.file.copy('karma/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', {
            process: function (contents, path) {
                return grunt.template.process(contents, {
                    data: {
                        scripts: jsFiles
                    }
                });
            }
        });
    });

};

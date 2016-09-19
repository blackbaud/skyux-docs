/*jslint node: true, nomen: true, plusplus: true */
'use strict';

module.exports = function (grunt) {

    var skySrcPath = 'sky-jsdoc/sky-';

    // Load Blackbaud Stache config
    grunt.task.loadNpmTasks('grunt-jsdoc-to-markdown');
    grunt.task.loadNpmTasks('blackbaud-stache');

    // Add our necessary configuration information
    grunt.config.merge({
        stache: {
            hooks: {
                preStache: [
                    'getLatestSkyRelease'
                ],
                preAssemble: [
                    'setModalFullLayout'
                ]
            },
            pages: [{
                url: skySrcPath + '<%= stache.config.latest_sky_release %>.json',
                layout: 'layouts/custom-jsdoc.hbs',
                dest: 'components/',
                type: 'jsdoc'
            }]
        }
    });

    /**
    * Sets the layout of the modalfull example.
    **/
    grunt.registerTask('setModalFullLayout', function () {
        var key = 'assemble.custom.options.pages',
            pages = grunt.config.get(key);
        pages['components/modalfull/index.md'].data.layout =
            '../../../../includes/bb-page-layout';
        grunt.config.set(key, pages);
    });

    /**
    * Reads the latest sky release file if it exists.
    * This file is automatically created via Travis.
    **/
    grunt.registerTask('getLatestSkyRelease', function () {
        var file = 'includes/latest-release.txt',
            key = 'stache.config.latest_sky_release',
            sriFile,
            v;

        v = grunt.config.get(key);

        if (grunt.file.exists(file)) {
            v = grunt.file.read(file, 'utf8').replace(/(\r\n|\n|\r)/gm, '');

            // Verify it exists
            if (grunt.file.exists(skySrcPath + v + '.json')) {
                grunt.config.set(key, v);
            } else {
                grunt.fail.warn('The version specified in latest-release.txt does not exist in sky-jsdoc: ' + v);
            }
        } else {
            grunt.log.writeln('Latest sky release not specified.  Defaulting to: ' + v);
        }

        sriFile = 'sky-sri/sky-' + v + '.json';

        if (grunt.file.exists(sriFile)) {
            grunt.config.set('stache.config.latest_sky_sri', grunt.file.readJSON(sriFile));
        }
    });

};

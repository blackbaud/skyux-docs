/*jshint browser: true */
/*globals angular, FastClick */

(function ($) {
    'use strict';

    /**
    * Initialize our application
    **/
    function RunBlock($rootScope, bbWait, bbOmnibarConfig, bbHelpConfig, bbScrollIntoViewConfig) {
        bbOmnibarConfig.enableSearch = true;
        bbOmnibarConfig.enableHelp = true;
        bbHelpConfig.productId = 'REx';
        bbHelpConfig.url = '//p1helpui.renxt.blackbaud.com/helpwidget.js';
        bbScrollIntoViewConfig.reservedTop = 30;

        $rootScope.$on("bbBeginWait", function (e, opts) {
            e.stopPropagation();
            bbWait.beginPageWait(opts);
        });

        $rootScope.$on("bbEndWait", function (e, opts) {
            e.stopPropagation();
            bbWait.endPageWait(opts);
        });
    }

    /**
    * Controller for all the documentation pages
    **/
    function DocumentationController($document, plunkerFactory) {
        var vm = this;
        vm.editInPlunker = function (selectorHtml, selectorJs, version) {
            plunkerFactory(
                $document.find(selectorHtml).val(),
                $document.find(selectorJs).val(),
                version
            );
        };

        $document.find('.equal-height-row').each(function () {
            var $this = $(this),
                height = 0;

            $this.find($this.data('equal-height-selector')).each(function () {
                var h = $(this).height();
                height = h > height ? h : height;
            }).css('min-height', height + 'px');
        });
    }

    /**
    * Controller used on the directives page list
    * Assumes every panel-wrapper has a panel-title child element.
    **/
    function DirectivesController($document) {
        var vm = this,
            directives = angular.element('.panel-col');

        vm.search = function () {
            vm.matchCount = 0;
            angular.forEach(directives, function (directive) {
                var el = angular.element(directive),
                    title = el.text().toLowerCase(),
                    match = vm.query !== '' && title.indexOf(vm.query.toLowerCase()) > -1;
                el.toggleClass('is-match', match);
                el.toggleClass('is-not-match', !match);
                if (match) {
                    vm.matchCount++;
                }
            });
        };

        vm.clear = function () {
            vm.query = '';
            vm.search();
        };

        vm.query = '';
    }

    /**
    * Controller to initialize the carousel on the homepage
    * I would prefer to use CarouselController here but that causes conflicts.
    **/
    function InActionController() {
        var vm = this;
        vm.interval = 6000;
    }

    /**
    * Used to pass individual demo files into a new Plunker
    **/
    function plunkerFactory($document) {
        return function (html, js, version) {

            var createElement,
                wrapHtml,
                wrapJs,
                form;

            createElement = function (name, properties) {
                var el = angular.element('<' + name + '></' + name + '>');
                angular.forEach(properties, function (value, key) {
                    el.attr(key, value);
                });
                return el;
            };

            wrapHtml = function (content) {
                var host = 'https://sky.blackbaudcdn.net/skyux/';
                return [
                    '<!doctype html>',
                    '<html ng-app="stache">',
                    ' <head>',
                    '   <link rel="stylesheet" href="' + host + version + '/css/libs.css">',
                    '   <link rel="stylesheet" href="' + host + version + '/css/sky.css">',
                    '   <script src="' + host + version + '/js/libs.js"></script>',
                    '   <script src="' + host + version + '/js/sky.js"></script>',
                    '   <script src="index.js"></script>',
                    ' </head>',
                    '<body>',
                    content,
                    '</body>',
                    '</html>'
                ].join('\n');
            };

            wrapJs = function (content) {
                return [
                    'angular.module("stache", ["sky", "ui.bootstrap", "ui.select"]);',
                    content
                ].join('\n');
            };

            form = createElement('form', {
                class: 'hide',
                method: 'post',
                action: 'http://plnkr.co/edit/?p=preview',
                target: '_blank'
            });

            form.append(createElement('input', {
                name: 'files[index.html]',
                type: 'hidden',
                value: wrapHtml(html)
            }));

            form.append(createElement('input', {
                name: 'files[index.js]',
                type: 'hidden',
                value: wrapJs(js)
            }));

            $document.find('body').append(form);
            form[0].submit();
            form.remove();
        };
    }

    /**
    * Dependency injection
    **/
    RunBlock.$inject = [
        '$rootScope',
        'bbWait',
        'bbOmnibarConfig',
        'bbHelpConfig',
        'bbScrollIntoViewConfig'
    ];
    DocumentationController.$inject = [
        '$document',
        'plunkerFactory'
    ];
    DirectivesController.$inject = [
        '$document'
    ];
    plunkerFactory.$inject = [
        '$document'
    ];

    /**
    * Create our application
    **/
    angular
      .module('stache')
      .factory('plunkerFactory', plunkerFactory)
      .controller('DocumentationController', DocumentationController)
      .controller('DirectivesController', DirectivesController)
      .controller('InActionController', InActionController)
      .run(RunBlock);

    /**
    * Eliminates 300ms delay in clicking
    **/
    $(function () {
        if (typeof FastClick !== 'undefined') {
            FastClick.attach(document.body);
        }
    });

}(jQuery));

/*global angular */
(function () {
    'use strict';

    function OmnibarDocsConfig($stateProvider) {
        $stateProvider
            .state('TabNative', {
                url: 'native'
            })
            .state('TabAngularJS', {
                url: 'angularjs'
            });
    }

    OmnibarDocsConfig.$inject = ['$stateProvider'];

    angular.module('stache')
        .config(OmnibarDocsConfig)
        .controller('OmnibarDocsController', angular.noop);
}());

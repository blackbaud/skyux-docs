/*global angular */
(function () {
    'use strict';

    function OmnibarDocsConfig($stateProvider) {
        $stateProvider
            .state('TabAngularJS', {
                url: 'angularjs'
            })
            .state('TabNative', {
                url: 'native'
            });
    }

    OmnibarDocsConfig.$inject = ['$stateProvider'];

    angular.module('stache')
        .config(OmnibarDocsConfig)
        .controller('OmnibarDocsController', angular.noop);
}());

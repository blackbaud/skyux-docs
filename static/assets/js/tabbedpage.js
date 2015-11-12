/*global angular */

(function () {
    'use strict';

    function TabbedPageTutorialController() {
        var self = this;

        self.constituentGridOptions = {
            columns: [
                {
                    caption: 'Name',
                    jsonmap: 'name',
                    id: 1,
                    name: 'name',
                    description: 'The constituent\'s name',
                    width_all: 300,
                    width_xs: 100
                },
                {
                    caption: 'Instrument',
                    jsonmap: 'instrument',
                    id: 2,
                    name: 'instrument',
                    description: 'The constituent\'s primary instrument',
                    width_all: 300,
                    width_xs: 100
                }
            ],
            data: [
                {
                    id: '1',
                    name: 'John',
                    instrument: 'Rhythm Guitar'
                },
                {
                    id: '2',
                    name: 'Paul',
                    instrument: 'Bass Guitar'
                },
                {
                    id: '3',
                    name: 'George',
                    instrument: 'Lead Guitar'
                },
                {
                    id: '4',
                    name: 'Ringo',
                    instrument: 'Drums'
                }
            ],
            selectedColumnIds: [1, 2]
        };

        self.giftGridOptions = {
            columns: [
                {
                    caption: 'Name',
                    jsonmap: 'name',
                    id: 1,
                    name: 'name',
                    description: 'The constituent who gave the gift',
                    width_all: 300,
                    width_xs: 100
                },
                {
                    caption: 'Amount',
                    jsonmap: 'amount',
                    id: 2,
                    name: 'amount',
                    description: 'The amount of the gift',
                    width_all: 300,
                    width_xs: 100
                },
                {
                    caption: 'Date',
                    jsonmap: 'date',
                    id: 3,
                    name: 'date',
                    description: 'The date the gift was given',
                    width_all: 300,
                    width_xs: 100
                }
            ],
            data: [
                {
                    id: '1',
                    name: 'John',
                    amount: '$1,000',
                    date: '3/28/1968'
                },
                {
                    id: '2',
                    name: 'Paul',
                    amount: '$300',
                    date: '1/30/1969'
                },
                {
                    id: '3',
                    name: 'Ringo',
                    amount: '$500',
                    date: '12/17/1966'
                },
                {
                    id: '4',
                    name: 'Paul',
                    amount: '$33,250',
                    date: '1/12/1969'
                },
                {
                    id: '5',
                    name: 'George',
                    amount: '$400',
                    date: '8/4/1967'
                },
                {
                    id: '6',
                    name: 'Ringo',
                    amount: '$235',
                    date: '9/2/1964'
                },
                {
                    id: '7',
                    name: 'Paul',
                    amount: '$725',
                    date: '5/19/1965'
                }
            ],
            selectedColumnIds: [1, 2]
        };

        self.constituentCount = 4;
        self.giftCount = 7;
    }

    angular.module('stache')
        .controller('TabbedPageTutorialController', TabbedPageTutorialController);
}());

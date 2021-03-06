'use strict';

/*
lpApp.animation('.panel-swipe', ['$rootScope', function($rootScope) {
    return {
        beforeAddClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    transform: 'scale3d(1, 1, 1)'
                });

                jQuery(element).animate({
                    transform: 'scale3d(2, 2, 1)'
                }, done);
            }else {
                jQuery(element).css({
                    transform: 'scale3d(1, 1, 1)'
                });

                jQuery(element).animate({
                    transform: 'scale3d(0, 0, 1)'
                }, done);
            }

        },
        removeClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    transform: 'scale3d(0, 0, 1)'
                });

                jQuery(element).animate({
                    transform: 'scale3d(1, 1, 1)'
                }, done);
            }else {
                jQuery(element).css({
                    transform: 'scale3d(2, 2, 2)'
                });

                jQuery(element).animate({
                    transform: 'scale3d(1, 1, 1)'
                }, done);
            }
        }
    };
}]);
*/

/*
lpApp.animation('.panel-swipe', ['$rootScope', function($rootScope) {
    return {
        beforeAddClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    opacity: 1
                });

                jQuery(element).animate({
                    opacity: 0
                }, done);
            }else {
                jQuery(element).css({
                    opacity: 1
                });

                jQuery(element).animate({
                    opacity: 0
                }, done);
            }

        },
        removeClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    opacity: 0
                });

                jQuery(element).animate({
                    opacity: 1
                }, done);
            }else {
                jQuery(element).css({
                    opacity: 0
                });

                jQuery(element).animate({
                    opacity: 1
                }, done);
            }
        }
    };
}]);
*/


lpApp.animation('.panel-swipe', ['$rootScope', function($rootScope) {
    return {
        beforeAddClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    opacity: 1,
                    transform: 'scale(1, 1)'
                });

                jQuery(element).animate({
                    opacity: 0,
                    transform: 'scale(2, 2)'
                }, 600, done);
            }else {
                jQuery(element).css({
                    opacity: 1,
                    transform: 'scale(1, 1)'
                });

                jQuery(element).animate({
                    opacity: 0,
                    transform: 'scale(0, 0)'
                }, 600, done);
            }

        },
        removeClass : function(element, className, done) {

            if ($rootScope.panelSwipe === 'left') {
                jQuery(element).css({
                    opacity: 0,
                    transform: 'scale(0, 0)'
                });

                jQuery(element).animate({
                    opacity: 1,
                    transform: 'scale(1, 1)'
                }, 600, done);
            }else {
                jQuery(element).css({
                    opacity: 0,
                    transform: 'scale(2, 2)'
                });

                jQuery(element).animate({
                    opacity: 1,
                    transform: 'scale(1, 1)'
                }, 600, done);
            }
        }
    };
}]);



'use strict';

module.exports = {

    options: {
        limit: 6
    },

    // Serve tasks
    watch: [
        'watch'
    ],

    // Javascript
    jsSeq1: [
        'clean:distJs',
        'jshint'
    ],
    jsSeq2: [
        'newer:uglify:scripts',
        'newer:uglify:magentoScripts',
        'newer:uglify:vendorScripts',
        'newer:uglify:foundationScripts'
    ],
    jsSeq3: [
        'concat:magentoScripts',
        'concat:foundationScripts',
        'concat:vendorScripts',
        'concat:productScripts'
    ],
    jsSeq4: [
        'newer:copy:vendorJS',
        'clean:src'
    ],

    // CSS
    cssSeq1: [
        'clean:distCss'
    ],
    cssSeq2: [
        'compass'
    ],
    cssSeq3: [
        'autoprefixer'
    ],
    cssSeq4: [
        'cssmin'
    ],
    cssSeq5: [
        'bless',
        'clean:src'
    ],

    // MD-ICONS
    mdIconsSeq1: [
        'clean:distMdicons'
    ],
    mdIconsSeq2: [
        'compass:distMdicons'
    ],
    mdIconsSeq3: [
        'autoprefixer:distMdicons'
    ],
    mdIconsSeq4: [
        'cssmin:distMdicons'
    ],
    mdIconsSeq5: [
        'clean:src'
    ],

};

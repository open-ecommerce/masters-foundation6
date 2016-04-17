'use strict';

module.exports = {
    scripts: {
        options: {
            mangle: true,
            compress: true,
            wrap: true,
            sourceMap: 'js/mariasole.map'
        },
        files: [{
            src: 'src/js/mariasole.js',
            dest: 'js/mariasole.min.js'
        }]
    },
    magentoScripts: {
        options: {
            mangle: false,
            compress: true,
            wrap: false
        },
        files: [{
            expand: true,
            cwd: '../../../../htdocs/js',
            src: [
                '**/*.js',
                '!**/*.min.js'
            ],
            dest: '../../../../htdocs/js',
            extDot: 'last',
            ext: '.min.js'
        }]
    },
    vendorScripts: {
        options: {
            mangle: false,
            compress: true,
            wrap: false
        },
        files: [{
            expand: true,
            cwd: 'src/js/vendor',
            src: [
                '*.js',
                '!*.min.js'
            ],
            dest: 'src/js/vendor',
            extDot: 'last',
            ext: '.min.js'
        }]
    },
    foundationScripts: {
        options: {
            mangle: false,
            compress: true,
            wrap: false
        },
        files: [{
            expand: true,
            cwd: 'src/foundation/js/foundation',
            src: [
                '*.js',
                '!*.min.js'
            ],
            dest: 'src/foundation/js/foundation',
            extDot: 'last',
            ext: '.min.js'
        }]
    }
};

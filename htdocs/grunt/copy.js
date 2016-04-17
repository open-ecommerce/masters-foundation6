'use strict';

module.exports = {
    vendorJS: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: 'src/assets/js/',
                dest: 'dist/js/',
                src: [
                    '*'
                ]
            }
        ]
    }
};

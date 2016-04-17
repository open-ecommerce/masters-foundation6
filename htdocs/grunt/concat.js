'use strict';

module.exports = {
    magentoScripts: {
        src: [
            'src/magento_js/prototype/validation.min.js',
            'src/magento_js/varien/js.min.js',
            'src/magento_js/varien/form.min.js',
            'src/magento_js/mage/translate.min.js',
            'src/magento_js/mage/cookies.min.js',
            'src/magento_js/lib/ccard.min.js',
            'src/magento_js/scriptaculous/builder.min.js',
            'src/magento_js/scriptaculous/effects.min.js',
            'src/magento_js/scriptaculous/dragdrop.min.js',
            'src/magento_js/scriptaculous/controls.min.js',
            'src/magento_js/scriptaculous/slider.min.js',
            'src/magento_js/prototype/window.min.js',
            'src/magento_js/varien/configurable.min.js',
            'src/magento_js/varien/product.min.js',
            'src/magento_js/varien/menu.min.js'
        ],
        dest: 'js/vendor/magento.min.js'
    },
    foundationScripts: {
      src: [
            'foundation/js/foundation/foundation.min.js',
            'foundation/js/foundation/foundation.section.min.js',
            'foundation/js/foundation/foundation.forms.min.js',
            'foundation/js/foundation/foundation.orbit.min.js',
            'foundation/js/foundation/foundation.reveal.min.js',
            'foundation/js/foundation/foundation.offcanvas.oe.min.js',
            'foundation/js/foundation/foundation.tooltip.min.js',
            'foundation/js/foundation/foundation.interchange.min.js',
            'foundation/js/foundation/foundation.tab.min.js'
        ],
      dest: 'js/vendor/fundation-combined.min.js'
    },    
    vendorScripts: {
      src: [
          'src/js/vendor/jquery.min.js',
          'src/js/vendor/jquery.noconflict.min.js',
          'src/js/vendor/custom.modernizr.min.js',
          'src/js/vendor/overthrow.min.js',
          'src/js/vendor/polar.min.js'
        ],
      dest: 'js/vendor/vendor-combined.min.js'
    },
    productScripts: {
      src: [
          'src/js/vendor/highslide-full.min.js'
        ],
      dest: 'js/vendor/product-combined.min.js'
    }
};

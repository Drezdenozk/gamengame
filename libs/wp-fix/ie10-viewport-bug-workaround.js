/*!
 * IE10 viewport hack лечит баг на Windows Phone
 * неумеющим читать мета-тег viewport
 */

// Вырвано из Bootstrap 3
// http://getbootstrap.com/getting-started/#support-ie10-width

(function() {
  'use strict';
  var width = "1040px";
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:' + width + '!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();

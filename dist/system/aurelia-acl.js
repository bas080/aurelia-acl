'use strict';

System.register(['./acl'], function (_export, _context) {
  "use strict";

  var Acl, _typeof;

  return {
    setters: [function (_acl) {
      Acl = _acl.Acl;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function configure(aurelia, config) {
        aurelia.globalResources('./attribute/allowed.js');

        if (!config) {
          return;
        }

        var acl = aurelia.container.get(Acl);

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          acl.setPermissions(config);
        }

        if (typeof config === 'function') {
          config(acl);
        }
      }

      _export('configure', configure);

      _export('Acl', Acl);
    }
  };
});
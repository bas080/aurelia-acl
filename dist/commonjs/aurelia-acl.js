'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Acl = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.configure = configure;

var _acl = require('./acl');

function configure(aurelia, config) {
  aurelia.globalResources('./attribute/allowed.js');

  if (!config) {
    return;
  }

  var acl = aurelia.container.get(_acl.Acl);

  if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
    acl.setPermissions(config);
  }

  if (typeof config === 'function') {
    config(acl);
  }
}

exports.Acl = _acl.Acl;
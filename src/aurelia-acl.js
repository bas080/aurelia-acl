import {Acl} from './acl';
import {exists, isObject, isFunction} from './utils';
export {Allowed} from './attribute/allowed';

export function configure(aurelia, config) {
  aurelia.globalResources('./attribute/allowed.js');

  if (!exists(config)) {
    return; /* do nothing if config does not exist */
  }

  let acl = aurelia.container.get(Acl);

  if (isObject(config)) {
    acl.set(config);
  }

  if (isFunction(config)) {
    config(acl);
  }
}

export {
  Acl
};

export {Allowed} from './attribute/allowed';

export class Acl {
  permissions = {};

  /**
   * Set the permissions object with new permissions
   *
   * @param {object} permissions
   *
   * @chainable
   */
  setPermissions(permissions) {
    this.permissions = {};

    for (let resource in permissions) {
      if (!permissions.hasOwnProperty(resource)) {
        continue;
      }

      this.permit(resource, permissions[resource]);
    }

    return this;
  }

  /**
   * @param {*} resource used to reference the permissions
   * @param {*} rules used to set the value of the resource
   *
   * @chainable
   */
  permit(resource, rules) {
    if (!this.permissions[resource]) {
      this.permissions[resource] = {};
    }

    switch (true) {

    case typeof rules === 'string':
      this.permissions[resource][rules] = true;
      break;

    case ['boolean', 'object'].indexOf(typeof rules) > -1 && !Array.isArray(rules):
      this.permissions[resource] = rules;
      break;

    case Array.isArray(rules):
      rules.forEach(rule => {
        this.permissions[resource][rule] = true;
      });
      break;

    default:
      throw new Error('Invalid rule type supplied. Expected one of string, boolean or object.');
    }

    return this;
  }

  /**
   * Check permission to access an action of a resource
   *
   * @param  {{}}     resource
   * @param  {String} action
   *
   * @return {boolean}
   */
  hasPermission(resource, action) {
    return !!(typeof this.permissions[resource] === 'object' && this.permissions[resource][action]);
  }

  /**
   * Return true when the resource has the desired permissions
   *
   * @param {*} resource used to reference the permissions
   * @param {*} rules used to set the value of the resource
   *
   * @returns {boolean}
   */
  isAllowed(resource, action) {
    if (typeof resource === 'object') {
      return Object.getOwnPropertyNames(resource).every(resourceName => {
        return this.isAllowed(resourceName, resource[resourceName]);
      });
    }

    if (!Array.isArray(action)) {
      return this.permissions[resource] === true || this.hasPermission(resource, action);
    }

    return action.every(actionName => {
      return this.isAllowed(resource, actionName);
    });
  }
}

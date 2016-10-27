var _dec, _dec2, _class;

import { inject, Optional } from 'aurelia-dependency-injection';
import { customAttribute, Animator } from 'aurelia-templating';
import { DOM } from 'aurelia-pal';
import { Acl } from '../acl';

export let Allowed = (_dec = customAttribute('allowed'), _dec2 = inject(DOM.Element, Animator, Optional.of(DOM.boundary, true), Acl), _dec(_class = _dec2(_class = class Allowed {
  constructor(element, animator, domBoundary, acl) {
    this.acl = acl;
    this.element = element;
    this.animator = animator;
    this.domBoundary = domBoundary;
  }

  valueChanged(newValue) {
    if (this.acl.isAllowed(newValue)) {
      this.animator.removeClass(this.element, 'aurelia-hide');
    } else {
      this.animator.addClass(this.element, 'aurelia-hide');
    }
  }

  bind(bindingContext) {
    this.valueChanged(this.value);
  }
}) || _class) || _class);
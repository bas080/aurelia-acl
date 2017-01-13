# aurelia-acl

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

> Permission plugin that works with [aurelia-authentication](https://github.com/SpoonX/aurelia-authentication).

## Documentation

You can find usage examples and the documentation at [aurelia-acl](http://aurelia-acl.spoonx.org/).

The [changelog](doc/CHANGELOG.md) provides you with information about important changes.

## Usage

This example assumes that you have an object on the `params.user.permissions`
that is of a valid format. Read more about supported formats in the [permissions
section](doc/permissions.md).

```js

import {Acl} from 'aurelia-acl';
import {inject} from 'aurelia-framework';

@inject(Acl)
export class App {

  constructor(acl) {
    this.acl = acl;
  }

  activate(params) {
    this.acl.setPermissions(params.user.permissions);
  }

}
```

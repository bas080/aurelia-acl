# aurelia-acl

[![Build Status](https://travis-ci.org/SpoonX/aurelia-acl.svg)](https://travis-ci.org/SpoonX/aurelia-acl)
[![Known Vulnerabilities](https://snyk.io/test/npm/name/badge.svg)](https://snyk.io/test/npm/aurelia-acl)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000?style=plastic)](https://gitter.im/SpoonX/Dev)

Does your frontend application need a way to know who can see and do what. Are
you able to easily derive and send this information from your backend to your
client.

Aurelia-acl allows you to flexibly grant, revoke, set and check if the user is
allowed to access a certain part of your application.

* only requires you to know what a permissions object is
* set the permissions using a simple javascript object.
* the grant command extends permissions during your application lifecycle
* revoke removes them and set resets them
* isAllowed checks if the given permissions are part of the granted permissions
* custom attribute for showing or hiding an element based on a permissions object

## Installation

### Jspm/SytemJs

Run `jspm i aurelia-acl` from your project root.

### Webpack

Run `npm i aurelia-acl --save` from your project root.

## Documentation

You can find usage examples and the documentation at [aurelia-acl-doc](http://aurelia-acl.spoonx.org/).

The [changelog](doc/changelog.md) provides you with infaclation about important changes.

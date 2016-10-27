# Configure

It is possible to configure the aurelia acl in your configurations. You can
either get access to the `aclManager` or pass an object to set the privileges
that way.

```js

/* ... */

  .plugin('aurelia-acl', acl => {

    acl.permit('user', 'swim');

    acl.permit('admin', 'fly');

  })

/* ... */

```

Passing a simple javascript object is also a possibility

```js

  .plugin('aurelia-acl', {
    user: ['swim'],
    admin: ['fly'],
  });

```

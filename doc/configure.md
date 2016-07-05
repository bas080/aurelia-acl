# Configure

It is possible to configure the aurelia acl in your configurations. You can
either get access to the `acl` application singleton instance or pass an object
to set the privileges that way.

> using the acl instance by defining a function

```js

/* ... */

  .plugin('aurelia-acl', acl => {

    acl.grant({'user': 'swim'});

    /* or */

    acl.set({ 'admin': 'fly' });

  })

/* ... */

```

> Passing a simple javascript object which defined the permissions is also
> possible.

```js

  .plugin('aurelia-acl', {
    user: ['swim'],
    admin: ['fly'],
  });

```

You can also choose to set the permissions at another moment in your
application lifecycle.

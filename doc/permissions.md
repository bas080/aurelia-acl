# Permissions

A permission in aurelia acl is represented using strings, arrays and objects.
The idea is to have a flexible way of granting, revoking and checking for
permissions. Aurelia acl supports *nested* permissions. Meaning one can put
objects or strings in arrays and arrays in object's properties. This leaves it
up to you to choose what best fits your project's needs.

## Object

Describing permissions using purely an object is done like this.

```js

let userPermissions = {
  messages: {
    read: true,
    write: true,
    delete: false
  }
};

```

> Internally aurelia acl will normalize objects. Meaning that truthy values
> become true and otherwise false. It also converts arrays and strings to
> objects with boolean values.

## Array

Defining the same permissions as above using an array.

```js

let userPermissions = {
  messages: ['read', 'write', 'delete']
};

```

This array is normalized to the same shape as the example above.

## String

If nesting is not your thing and you would like to keep things really flat and
simple, you should just use strings. `acl.grant('messages')` to grant messages
permissions.

```js

let userPermissions = 'messages';

/* which is normalized to */

{
  messages: true
}

```

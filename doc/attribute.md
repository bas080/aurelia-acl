# Attr: Allowed

The allowed attribute enables developers to show or hide an element based on
the permissions of the user.

Imagine i'm making a tool that can be used by different types of users. We have
the `customer` and `accountant`. We can all agree that a customer should not
see the same as an accountant. Let's define some permissions first.

```js

  ajax.get( '/user', user => {
    acl.permit('user', 'messages');
    canSeeStatistics(user) && acl.permit('user', 'statistics')
  });

  function canSeeStatistics(user) {
    return (user.type === 'accountant');
  }

```

And using a simple string to describe the required permission.

```html
  <messages allowed="{user: 'messages'}'"></messages>

  <statistics allowed="{user: 'statistics'}"></statistics>
```

If all is well the accountant does get to see the statistics and other users do
not.

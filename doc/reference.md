# Reference

## Acl

the Acl stores permissions and enables developers to grant, revoke, set and check if
user has permissions. You should read more about the permissions object in
permissions chapter if you have not done that yet.

All methods are chainable except for the isAllowed method which returns
a boolean.

### .setPermissions(permissions) ⇒ `Acl`

Used to set the permissions at config or reset the permissions at a later time
in the application lifecycle.

### .permit(resource, rules) ⇒ `Acl`

Can be used to add additional permissions to the permissions object.

### .isAllowed(resource, action) ⇒ `boolean`

Checks if the provided action is allowed.

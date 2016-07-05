# Reference

## Acl

the Acl stores permissions and enables developers to grant, revoke, set and check if
user has permissions. You should read more about the permissions object in
permissions chapter if you have not done that yet.

All the methods that return an object return the permissions object that
contains the granted and revoked permissions.

### .set(permissions) ⇒> *object*

Used to set the permissions at config or reset the permissions at a later time
in the application lifecycle.

### .grant(permissions) ⇒ *object*

Can be used to add additional permissions to the permissions object.

### .revoke(permissions) ⇒ *object*

Sets the permission's property to false.

### .isAllowed(permissions) ⇒ *boolean*

Takes a permission object and checks if these permissions have been granted
before. If all the permissions passed are `true`, isAllowed will return true.

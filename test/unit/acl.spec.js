import {Acl} from '../../src/acl.js';

describe('Acl', () => {
  let acl;
  let permissions = {
    post    : true,
    product : ['read'],
    comment : 'read',
    foo     : {bar: true, bat: false},
    user    : false,
    category: ['create', 'read', 'update', 'delete']
  };

  beforeEach(() => {
    acl = new Acl().setPermissions(permissions);
  });

  it('has a permissions object', () => {
    expect(typeof acl.permissions).toBe('object');
  });

  it('can check if user is allowed', () => {
    expect(acl.isAllowed('post', 'foo')).toBe(true);
    expect(acl.isAllowed('product', 'read')).toBe(true);
    expect(acl.isAllowed('product', 'write')).toBe(false);
    expect(acl.isAllowed('user', 'write')).toBe(false);
    expect(acl.isAllowed('comment', 'read')).toBe(true);
    expect(acl.isAllowed('comment', 'anything')).toBe(false);
    expect(acl.isAllowed('category', ['read', 'delete'])).toBe(true);
    expect(acl.isAllowed('category', ['read', 'delete', 'cake'])).toBe(false);
    expect(acl.isAllowed({post: 'foo', category: ['read', 'delete']})).toBe(true);
    expect(acl.isAllowed({post: 'foo', category: ['read', 'delete']})).toBe(true);
    expect(acl.isAllowed({post: 'foo', category: ['read'], foo: ['bar']})).toBe(true);
  });
});

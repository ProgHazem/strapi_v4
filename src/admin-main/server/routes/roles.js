'use strict';

module.exports = [
  {
    method: 'POST',
    path: '/users/batch-delete',
    handler: 'user.deleteMany',
    config: {
      policies: [{ name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.delete'] } }],
    },
  },
  {
    method: 'GET',
    path: '/roles/:id/permissions',
    handler: 'role.getPermissions',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::roles.read'] } },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/roles/:id/permissions',
    handler: 'role.updatePermissions',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::roles.update'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/roles/:id',
    handler: 'role.findOne',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::roles.read'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/roles',
    handler: 'role.findAll',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::roles.read'] } },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/roles/:id',
    handler: 'role.update',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::roles.update'] } },
      ],
    },
  },
];

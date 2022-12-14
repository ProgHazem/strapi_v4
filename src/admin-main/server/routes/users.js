'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/users/me',
    handler: 'authenticated-user.getMe',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'PUT',
    path: '/users/me',
    handler: 'authenticated-user.updateMe',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'GET',
    path: '/users/me/permissions',
    handler: 'authenticated-user.getOwnPermissions',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'POST',
    path: '/users',
    handler: 'user.create',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.create'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: 'user.find',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.read'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/users/:id',
    handler: 'user.findOne',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.read'] } },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/users/:id',
    handler: 'user.update',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.update'] } },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/users/:id',
    handler: 'user.deleteOne',
    config: {
      policies: [{ name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.delete'] } }],
    },
  },
  {
    method: 'POST',
    path: '/users/batch-delete',
    handler: 'user.deleteMany',
    config: {
      policies: [{ name: 'admin-main::hasPermissions', config: { actions: ['admin-main::users.delete'] } }],
    },
  },
];

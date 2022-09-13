'use strict';

module.exports = [
  {
    method: 'POST',
    path: '/api-tokens',
    handler: 'api-token.create',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::api-tokens.create'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/api-tokens',
    handler: 'api-token.list',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::api-tokens.read'] } },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/api-tokens/:id',
    handler: 'api-token.revoke',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::api-tokens.delete'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/api-tokens/:id',
    handler: 'api-token.get',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::api-tokens.read'] } },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/api-tokens/:id',
    handler: 'api-token.update',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::api-tokens.update'] } },
      ],
    },
  },
];

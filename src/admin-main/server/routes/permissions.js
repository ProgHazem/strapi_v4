'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/permissions',
    handler: 'permission.getAll',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'POST',
    path: '/permissions/check',
    handler: 'permission.check',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
];

'use strict';

module.exports = {
  sso: [
    {
      method: 'GET',
      path: '/providers',
      handler: 'authentication.getProviders',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/connect/:provider',
      handler: 'authentication.providerLogin',
      config: { auth: false },
    },
    {
      method: 'POST',
      path: '/connect/:provider',
      handler: 'authentication.providerLogin',
      config: { auth: false },
    },
    {
      method: 'GET',
      path: '/providers/options',
      handler: 'authentication.getProviderLoginOptions',
      config: {
        policies: [
          'admin-main::isAuthenticatedAdmin',
          { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::provider-login.read'] } },
        ],
      },
    },
    {
      method: 'PUT',
      path: '/providers/options',
      handler: 'authentication.updateProviderLoginOptions',
      config: {
        policies: [
          'admin-main::isAuthenticatedAdmin',
          { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::provider-login.update'] } },
        ],
      },
    },
  ],
};

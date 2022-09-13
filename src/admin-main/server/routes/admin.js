'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/init',
    handler: 'admin-main.init',
    config: { auth: false },
  },
  {
    method: 'GET',
    path: '/project-settings',
    handler: 'admin-main.getProjectSettings',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: { actions: ['admin-main::project-settings.read'] },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/project-settings',
    handler: 'admin-main.updateProjectSettings',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: { actions: ['admin-main::project-settings.update'] },
        },
      ],
    },
  },
  {
    method: 'GET',
    path: '/project-type',
    handler: 'admin-main.getProjectType',
    config: { auth: false },
  },
  {
    method: 'GET',
    path: '/information',
    handler: 'admin-main.information',
    config: {
      policies: ['admin-main::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'GET',
    path: '/telemetry-properties',
    handler: 'admin-main.telemetryProperties',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/plugins',
    handler: 'admin-main.plugins',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::marketplace.read'] } },
      ],
    },
  },
  {
    method: 'POST',
    path: '/plugins/install',
    handler: 'admin-main.installPlugin',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: { actions: ['admin-main::marketplace.plugins.install'] },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/plugins/uninstall/:plugin',
    handler: 'admin-main.uninstallPlugin',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: { actions: ['admin-main::marketplace.plugins.uninstall'] },
        },
      ],
    },
  },
];

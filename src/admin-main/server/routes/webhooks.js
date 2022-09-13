'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/webhooks',
    handler: 'webhooks.listWebhooks',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.read'] } },
      ],
    },
  },
  {
    method: 'POST',
    path: '/webhooks',
    handler: 'webhooks.createWebhook',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.create'] } },
      ],
    },
  },
  {
    method: 'GET',
    path: '/webhooks/:id',
    handler: 'webhooks.getWebhook',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.read'] } },
      ],
    },
  },
  {
    method: 'PUT',
    path: '/webhooks/:id',
    handler: 'webhooks.updateWebhook',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.update'] } },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/webhooks/:id',
    handler: 'webhooks.deleteWebhook',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.delete'] } },
      ],
    },
  },
  {
    method: 'POST',
    path: '/webhooks/batch-delete',
    handler: 'webhooks.deleteWebhooks',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.delete'] } },
      ],
    },
  },
  {
    method: 'POST',
    path: '/webhooks/:id/trigger',
    handler: 'webhooks.triggerWebhook',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        { name: 'admin-main::hasPermissions', config: { actions: ['admin-main::webhooks.update'] } },
      ],
    },
  },
];

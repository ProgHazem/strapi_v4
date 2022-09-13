const permissions = {
  contentManager: {
    main: [],
    collectionTypesConfigurations: [
      {
        action: 'plugin::content-manager.collection-types.configure-view',
        subject: null,
      },
    ],
    componentsConfigurations: [
      {
        action: 'plugin::content-manager.components.configure-layout',
        subject: null,
      },
    ],
    singleTypesConfigurations: [
      {
        action: 'plugin::content-manager.single-types.configure-view',
        subject: null,
      },
    ],
  },
  marketplace: {
    main: [
      { action: 'admin-main::marketplace.read', subject: null },
      { action: 'admin-main::marketplace.plugins.install', subject: null },
      { action: 'admin-main::marketplace.plugins.uninstall', subject: null },
    ],
    install: [{ action: 'admin-main::marketplace.plugins.install', subject: null }],
    read: [
      { action: 'admin-main::marketplace.read', subject: null },
      { action: 'admin-main::marketplace.plugins.uninstall', subject: null },
    ],
    uninstall: [{ action: 'admin-main::marketplace.plugins.uninstall', subject: null }],
  },
  settings: {
    roles: {
      main: [
        { action: 'admin-main::roles.create', subject: null },
        { action: 'admin-main::roles.update', subject: null },
        { action: 'admin-main::roles.read', subject: null },
        { action: 'admin-main::roles.delete', subject: null },
      ],
      create: [{ action: 'admin-main::roles.create', subject: null }],
      delete: [{ action: 'admin-main::roles.delete', subject: null }],
      read: [{ action: 'admin-main::roles.read', subject: null }],
      update: [{ action: 'admin-main::roles.update', subject: null }],
    },
    users: {
      main: [
        { action: 'admin-main::users.create', subject: null },
        { action: 'admin-main::users.read', subject: null },
        { action: 'admin-main::users.update', subject: null },
        { action: 'admin-main::users.delete', subject: null },
      ],
      create: [{ action: 'admin-main::users.create', subject: null }],
      delete: [{ action: 'admin-main::users.delete', subject: null }],
      read: [{ action: 'admin-main::users.read', subject: null }],
      update: [{ action: 'admin-main::users.update', subject: null }],
    },
    webhooks: {
      main: [
        { action: 'admin-main::webhooks.create', subject: null },
        { action: 'admin-main::webhooks.read', subject: null },
        { action: 'admin-main::webhooks.update', subject: null },
        { action: 'admin-main::webhooks.delete', subject: null },
      ],
      create: [{ action: 'admin-main::webhooks.create', subject: null }],
      delete: [{ action: 'admin-main::webhooks.delete', subject: null }],
      read: [
        { action: 'admin-main::webhooks.read', subject: null },
        // NOTE: We need to check with the API
        { action: 'admin-main::webhooks.update', subject: null },
        { action: 'admin-main::webhooks.delete', subject: null },
      ],
      update: [{ action: 'admin-main::webhooks.update', subject: null }],
    },
    'api-tokens': {
      main: [
        { action: 'admin-main::api-tokens.create', subject: null },
        { action: 'admin-main::api-tokens.read', subject: null },
        { action: 'admin-main::api-tokens.update', subject: null },
        { action: 'admin-main::api-tokens.delete', subject: null },
      ],
      create: [{ action: 'admin-main::api-tokens.create', subject: null }],
      delete: [{ action: 'admin-main::api-tokens.delete', subject: null }],
      read: [{ action: 'admin-main::api-tokens.read', subject: null }],
      update: [{ action: 'admin-main::api-tokens.update', subject: null }],
    },
  },
};

export default permissions;

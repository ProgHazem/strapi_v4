'use strict';

// eslint-disable-next-line node/no-extraneous-require
const { features } = require('@strapi/strapi/lib/utils/ee');
const featuresRoutes = require('./features-routes');

const getFeaturesRoutes = () => {
  return Object.entries(featuresRoutes).flatMap(([featureName, featureRoutes]) => {
    if (features.isEnabled(featureName)) {
      return featureRoutes;
    }

    return [];
  });
};

module.exports = [
  {
    method: 'POST',
    path: '/roles',
    handler: 'role.create',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: {
            actions: ['admin-main::roles.create'],
          },
        },
      ],
    },
  },
  {
    method: 'DELETE',
    path: '/roles/:id',
    handler: 'role.deleteOne',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: {
            actions: ['admin-main::roles.delete'],
          },
        },
      ],
    },
  },
  {
    method: 'POST',
    path: '/roles/batch-delete',
    handler: 'role.deleteMany',
    config: {
      policies: [
        'admin-main::isAuthenticatedAdmin',
        {
          name: 'admin-main::hasPermissions',
          config: {
            actions: ['admin-main::roles.delete'],
          },
        },
      ],
    },
  },
  ...getFeaturesRoutes(),
];

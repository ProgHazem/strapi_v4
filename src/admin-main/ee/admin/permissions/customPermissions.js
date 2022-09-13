const customPermissions = {
  settings: {
    sso: {
      main: [{ action: 'admin-main::provider-login.read', subject: null }],
      read: [{ action: 'admin-main::provider-login.read', subject: null }],
      update: [{ action: 'admin-main::provider-login.update', subject: null }],
    },
  },
};

export default customPermissions;

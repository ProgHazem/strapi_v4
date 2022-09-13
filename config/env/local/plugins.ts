// config/plugins.js
export default ({ env }) => ({
  upload: {
    provider: 'local-path',
    providerOptions: {
      path: env('UPLOADS_PATH'),
      url: env('STORAGE_URL')
      },
  },
});
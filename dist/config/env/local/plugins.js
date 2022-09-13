"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config/plugins.js
exports.default = ({ env }) => ({
    upload: {
        provider: 'local-path',
        providerOptions: {
            path: env('UPLOADS_PATH'),
            url: env('STORAGE_URL')
        },
    },
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "mysql",
        connection: {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_DB,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
        },
        options: {
            autoMigration: true, // this option is required in dbs other than sqlite so that tables can be created autuomatically
        },
        useNullAsDefault: true,
    },
});

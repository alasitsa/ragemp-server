let mysql = require('mysql2/promise');

module.exports = {
    connect: async function() {
        this.connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA

            // host: "127.0.0.1",
            // port: "3306",
            // user: "root",
            // password: "",
            // database: "gamemode-ragemp"
        });
        // await this.connection.connect();
    },

    end: async function () {
        await this.connection.end();
    },
    query: async function (query, values) {
        return await this.connection.query(query, values);
    },
    transact: async function (exec) {
        await this.connect();
        await exec();
        await this.end();
    }
}
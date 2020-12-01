"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: 'mysql',
    host: process.env.CLIO_MYSQL_HOST || dbConfig.host,
    port: process.env.CLIO_MYSQL_PORT || dbConfig.port,
    username: process.env.CLIO_MYSQL_USER || dbConfig.username,
    password: process.env.CLIO_MYSQL_PW || dbConfig.password,
    database: process.env.CLIO_MYSQL_DB || dbConfig.database,
    entities: ['dist/**/*.entity.js'],
    synchronize: false
};
//# sourceMappingURL=typeorm.config.js.map
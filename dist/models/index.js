"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
dotenv.config();
const env = process.env.APP_ENV || 'development';
const config = require(__dirname + '/../../db.config.json')[env];
//config.database, config.username, config.password, config
const sq = new sequelize_typescript_1.Sequelize({
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    host: config.host,
    storage: ':memory:',
    models: [__dirname + '/models'],
});
exports.sequelize = sq;
//# sourceMappingURL=index.js.map
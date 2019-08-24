import * as dotenv from 'dotenv';
import {Sequelize} from "sequelize-typescript";
dotenv.config();
const env = process.env.APP_ENV || 'development';
const config = require(__dirname + '/../../db.config.json')[env];
//config.database, config.username, config.password, config
const sq =  new Sequelize({
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    host: config.host,
    storage: ':memory:',
    models: [__dirname + '/models'], // or [Player, Team],
});
export const sequelize = sq;

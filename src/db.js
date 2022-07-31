// 'use strict';

// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const { user } = require('./models/user');

// let connection_string;


// switch (process.env.NODE_ENV) {
//     case 'production':
//         connection_string = 'process.env.DATABASE_URL';
//         break;
//     case 'dev':
//         connection_string = 'sqlite::memory';
//         break;
//     default:
//         connection_string = `sqlite:${process.env.SQLITE_FILE ?? '../db'}`;
// }

// const db = new Sequelize(connection_string, {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false,
//         },
//     },
// });

// // DO NOT RUN DB SYNC IN PRODUCTION DATABASE
// db.sync();

// module.exports = {
//     db,
//     User: user(db),
// };

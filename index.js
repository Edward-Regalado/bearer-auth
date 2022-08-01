'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const { db } = require('./src/models/index.js');
const port = process.env.PORT ?? 3000;

// const server = require('./src/server.js');
// server.start(port);

db.sync()
    .then(() => { server.start(port)})
    .catch(console.error);

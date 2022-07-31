'use strict';

// Third party dependencies (modules)
const express = require('express');

const notFoundErrorHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const authRoutes = require('./middleware/auth/route.js');

const foodRoutes = require('./routes/food.js');
const clothesRoutes = require('./routes/clothes.js');
const userRoutes = require('./routes/user.js');

// const { User } = require('./db.js');
// const Collection = require('../src/models/collection-class.js');


// Stretch goal
// app.use('/api/v1/', v1Routes);

const app = express();

// express global middleware
app.use(express.json());

// custom middleware
app.use(logger);


app.get('/', hello);

app.use(foodRoutes);
app.use(clothesRoutes);


// Error Handlers need to be the last thing defined
// These use the external modules above
app.use('*', notFoundErrorHandler);
app.use(serverErrorHandler);


// export an object with the express app and a separate method that can start the sever
module.exports = {
    server: app,
    start: (port) => {
        if(!port) {
            throw new Error('missing port');
        }
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    },
};



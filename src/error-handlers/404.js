'use strict';

const notFoundErrorHandler = (err, req, res, next) => {

    const errorObject = {
        error: err || err.message,
        route: req.path,
        query: req.query,
        body: req.body,
        status: 404,
        message: 'Invalid route'
    }
    res.status(404).json(errorObject);
};

module.exports = notFoundErrorHandler;

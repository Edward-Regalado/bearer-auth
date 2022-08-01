'use strict';

const serverErrorHandler = (err, req, res, next) => {

    const errorObject = {
        error: err || err.message,
        route: req.path,
        query: req.query,
        body: req.body,
        status: 500,
        message: 'Internal Server Error!'
    }
    res.status(500).json(errorObject);
};

module.exports = serverErrorHandler;

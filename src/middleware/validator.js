'use strict';

const validator = (req, res, next) => {
//   console.log("validator");
    if (req.params.name){
        next();
    } else {
        throw new Error ('wrong name!');
    }
};

module.exports = {
  validator,
};

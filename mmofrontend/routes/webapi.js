
/*
 * GET home page.
 */
var mongodb = require("mongodb");
exports.getData = function (req, res) {
    
    res.json(200, { message: "My first route" });

    
};


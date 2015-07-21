
/*
 * GET home page.
 */
var mongodb = require("mongodb");
exports.index = function (req, res) {
    
    res.render('index', {bla: 'ssss',  title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
};

exports.webapi = function (req, res) {
    
    res.json(200, { message: "My first route" });

    
};

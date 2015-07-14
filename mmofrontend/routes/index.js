
/*
 * GET home page.
 */
var mongodb = require("mongodb");
exports.index = function (req, res) {
    
    
    var url = "mongodb://mongodbvm-8t75no40.cloudapp.net";
    var MongoClient = mongodb.MongoClient;

    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);
            
            // do some work here with the database.
            var collection = db.collection('tasks');
            var all = collection.find({ itemCompleted: false }).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log('Found:', result);
                } else {
                    console.log('No document(s) found with defined "find" criteria!');
                }

            //var task1 = { itemName: 'Item1', itemCategory: 'Cat1', itemCompleted: false, itemDate : Date.now};
            //var task2 = { itemName: 'Item2', itemCategory: 'Cat1', itemCompleted: false, itemDate : Date.now };
            //var task3 = { itemName: 'Item3', itemCategory: 'Cat2', itemCompleted: false, itemDate : Date.now };

            //collection.insert([task1, task2, task3], function (err, result) {
            //    if (err) {
            //        console.log(err);
            //    } else {
            //        console.log('Inserted %d documents into the "tasks" collection. The documents inserted with "_id" are:', result.length, result);
            //    }
                //Close connection
                db.close();
            });
        }
    });
    console.log("connected");

    

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

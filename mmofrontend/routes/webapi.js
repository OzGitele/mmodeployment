
/*
 * GET home page.
 */
var mongodb = require("mongodb");
exports.getData = function (req, res) {
    


    //var url = "mongodb://mongodbvm-8t75no40.cloudapp.net";
    connString = "mongodb://adminTasks:linux@10.0.0.10:27017,10.0.0.11:27017/tasks?replicaSet=rs0";
    console.log(connString);
    var MongoClient = mongodb.MongoClient;
    MongoClient.connect(connString, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', connString);

            // do some work here with the database.
            //var collection = db.collection('tasks');
            //var task1 = { itemName: 'Item7', itemCategory: 'Cat2', itemCompleted: false, itemDate: Date.now };
            //var task2 = { itemName: 'Item8', itemCategory: 'Cat2', itemCompleted: false, itemDate: Date.now };
            //var task3 = { itemName: 'Item9', itemCategory: 'Cat1', itemCompleted: false, itemDate: Date.now };

            //collection.insert([task1, task2, task3], function (err, result) {
            //    if (err) {
            //        console.log(err);
            //    }
            //    else {
            //        console.log('Inserted %d documents into the "tasks" collection. The documents inserted with "_id" are:', result.length, result);
            //    }
            //});
            var all = collection.find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length) {
                    console.log('Found:', result);
                    res.json(200, result);
                } else {
                    console.log('No document(s) found with defined "find" criteria!');
                }
                db.close();
            });
        }
    });
};


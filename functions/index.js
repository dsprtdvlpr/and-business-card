const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.list = functions.https.onRequest((request, response) => {
    response.set("Access-Control-Allow-Origin", "*").send([
        { "name": "Name 1", "title": "Title 1" },
        { "name": "Name 2", "title": "Title 2" },
        { "name": "Name 3", "title": "Title 3" },
        { "name": "Name 4", "title": "Title 4" }
    ]);
});

exports.add = functions.https.onRequest((request, response) => {
    response.set("Access-Control-Allow-Origin", "*").send({ "status": "OK" });
});
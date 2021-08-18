const functions = require('firebase-functions');
const listRequestHandlerSingleton = require("./utils/singletons/list-request-handler-singleton");
const addRequestHandlerSingleton = require("./utils/singletons/add-request-handler-singleton");

exports.list = functions.https.onRequest(async (request, response) => {
    await listRequestHandlerSingleton.onRequest(request, response);
});

exports.add = functions.https.onRequest(async (request, response) => {
    await addRequestHandlerSingleton.onRequest(request, response);
});
const functions = require('firebase-functions');
const businessCardAppServiceSingleton = require("./utils/singletons/business-card-app-service-singleton");

exports.list = functions.https.onRequest(async (request, response) => {
    const businessCards = await businessCardAppServiceSingleton.list();

    response
        .set("Access-Control-Allow-Origin", "*")
        .send(businessCards.map(businessCard => {
            return {
                name: businessCard.getName(),
                title: businessCard.getTitle()
            };
        }));
});

exports.add = functions.https.onRequest(async (request, response) => {
    const { name, title } = request.body;
    const id = await businessCardAppServiceSingleton.add(name, title);

    response
        .set("Access-Control-Allow-Origin", "*")
        .send({ id: id });
});
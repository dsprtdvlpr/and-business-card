const businessCardAppServiceSingleton = require("./business-card-app-service-singleton");
const AddRequestHandler = require("../business-card/client/add-request-handler");

module.exports = new AddRequestHandler(businessCardAppServiceSingleton);
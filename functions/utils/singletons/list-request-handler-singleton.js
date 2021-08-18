const businessCardAppServiceSingleton = require("./business-card-app-service-singleton");
const ListRequestHandler = require("../business-card/client/list-request-handler");

module.exports = new ListRequestHandler(businessCardAppServiceSingleton);
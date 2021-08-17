const firestoreSingleton = require("./firestore-singleton");
const BusinessCardAppService = require("../../business-card/business-card-app-service");
const BusinessCardLocalDataStore = require("../business-card/data-store/business-card-local-data-store");
const BusinessCardRepository = require("../../business-card/business-card-repository");

module.exports = new BusinessCardAppService(
    new BusinessCardRepository(
        new BusinessCardLocalDataStore(firestoreSingleton)
    )
);
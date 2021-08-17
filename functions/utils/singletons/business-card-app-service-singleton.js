const firestoreSingleton = require("./firestore-singleton");
const BusinessCardAppService = require("../../business-card/business-card-app-service");
const BusinessCardLocalDataSource = require("../business-card/data-store/business-card-local-data-source");
const BusinessCardRepository = require("../../business-card/business-card-repository");

module.exports = new BusinessCardAppService(
    new BusinessCardRepository(
        new BusinessCardLocalDataSource(firestoreSingleton)
    )
);
const BusinessCard = require("./business-card");

class BusinessCardAppService {

    constructor(businessCardRepository) {
        this._businessCardRepository = businessCardRepository;
    }

    async list() {
        return this._businessCardRepository.list()
    }

    async add(name, title) {
        BusinessCard.assertValidName(name);
        BusinessCard.assertValidTitle(title);
        return this._businessCardRepository.add(name, title);
    }

}

module.exports = BusinessCardAppService;
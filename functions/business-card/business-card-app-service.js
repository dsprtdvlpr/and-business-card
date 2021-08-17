class BusinessCardAppService {

    constructor(businessCardRepository) {
        this._businessCardRepository = businessCardRepository;
    }

    async list() {
        return this._businessCardRepository.list()
    }

    async add(name, title) {
        return this._businessCardRepository.add(name, title);
    }

}

module.exports = BusinessCardAppService;
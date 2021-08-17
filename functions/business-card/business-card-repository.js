class BusinessCardRepository {

    constructor(businessCardLocalDataStore) {
        this._businessCardLocalDataStore = businessCardLocalDataStore;
    }

    async list() {
        return this._businessCardLocalDataStore.list();
    }

    async add(name, title) {
        return this._businessCardLocalDataStore.add(name, title);
    }
    
}

module.exports = BusinessCardRepository;
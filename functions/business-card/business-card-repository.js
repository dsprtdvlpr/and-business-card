class BusinessCardRepository {

    constructor(businessCardLocalDataSource) {
        this.businessCardLocalDataSource = businessCardLocalDataSource;
    }

    async list() {
        return this.businessCardLocalDataSource.list();
    }

    async add(name, title) {
        return this.businessCardLocalDataSource.add(name, title);
    }
    
}

module.exports = BusinessCardRepository;
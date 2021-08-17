const uuid = require("uuid");
const BusinessCard = require("../../../business-card/business-card");

class BusinessCardLocalDataStore {

    constructor(firestore) {
        this._firestore = firestore;
    }

    async list() {
        return await this._firestore.collection(BusinessCardLocalDataStore._COLLECTION_NAME)
            .get()
            .docs
            .map(doc => {
                const data = doc.data();
                return new BusinessCard(data.id, data.name, data.title);
            });
    }

    async add(name, title) {
        const id = uuid.v4();

        await this._firestore.collection(BusinessCardLocalDataStore._COLLECTION_NAME).add({
            id: id,
            name: name,
            title: title
        });

        return id;
    }

    static get _COLLECTION_NAME() {
        return "business-cards";
    }

}

module.exports = BusinessCardLocalDataStore;
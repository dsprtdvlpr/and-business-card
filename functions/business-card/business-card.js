class BusinessCard {

    constructor(id, name, title) {
        this._id = id;
        this._name = name;
        this._title = title;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getTitle() {
        return this._title;
    }

}

module.exports = BusinessCard;
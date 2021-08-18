const _ = require("underscore");

class BusinessCard {

    constructor(id, name, title) {
        BusinessCard.assertValidId(id);
        BusinessCard.assertValidName(name);
        BusinessCard.assertValidTitle(title);

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

    static assertValidId(id) {
        if (_.isUndefined(id) || _.isNull(id) || _.isEmpty(id)) {
            throw Error();
        }
    }

    static assertValidName(name) {
        if (_.isUndefined(name) || _.isNull(name) || _.isEmpty(name)) {
            throw Error();
        }
    }

    static assertValidTitle(title) {
        if (_.isUndefined(title) || _.isNull(title) || _.isEmpty(title)) {
            throw Error();
        }
    }

}

module.exports = BusinessCard;
const assert = require("assert");
const BusinessCard = require("../../business-card/business-card");

describe("BusinessCard", () => {
    it("when id is empty then it should throw error", () => {
        assert.throws(() => {
            BusinessCard.assertValidId("");
        });

        assert.throws(() => {
            BusinessCard.assertValidId(null);
        });

        assert.throws(() => {
            BusinessCard.assertValidId(undefined);
        });
    });

    it("when name is empty then it should throw error", () => {
        assert.throws(() => {
            BusinessCard.assertValidName("");
        });

        assert.throws(() => {
            BusinessCard.assertValidName(null);
        });

        assert.throws(() => {
            BusinessCard.assertValidName(undefined);
        });
    });

    it("when title is empty then it should throw error", () => {
        assert.throws(() => {
            BusinessCard.assertValidTitle("");
        });

        assert.throws(() => {
            BusinessCard.assertValidTitle(null);
        });

        assert.throws(() => {
            BusinessCard.assertValidTitle(undefined);
        });
    });
});
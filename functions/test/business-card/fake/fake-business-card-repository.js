class FakeBusinessCardRepository {

    static setUpListSuccess(sandbox, businessCardRepository, ...businessCards) {
        return sandbox.stub(businessCardRepository, "list").resolves(businessCards);
    }

    static setUpListFailed(sandbox, businessCardRepository, error) {
        return sandbox.stub(businessCardRepository, "list").rejects(error);
    }

    static setUpAddSuccess(sandbox, businessCardRepository, businessCardId) {
        return sandbox.stub(businessCardRepository, "add").resolves(businessCardId);
    }

    static setUpAddFailed(sandbox, businessCardRepository, error) {
        return sandbox.stub(businessCardRepository, "add").rejects(error);
    }

}

module.exports = FakeBusinessCardRepository;
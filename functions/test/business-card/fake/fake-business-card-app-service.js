class FakeBusinessCardAppService {

    static setUpListSuccess(sandbox, businessCardAppService, ...businessCards) {
        return sandbox.stub(businessCardAppService, "list").resolves(businessCards);
    }

    static setUpListFailed(sandbox, businessCardAppService, error) {
        return sandbox.stub(businessCardAppService, "list").rejects(error);
    }

    static setUpAddSuccess(sandbox, businessCardAppService, businessCardId) {
        return sandbox.stub(businessCardAppService, "add").resolves(businessCardId);
    }

    static setUpAddFailed(sandbox, businessCardAppService, error) {
        return sandbox.stub(businessCardAppService, "add").rejects(error);
    }

}

module.exports = FakeBusinessCardAppService;
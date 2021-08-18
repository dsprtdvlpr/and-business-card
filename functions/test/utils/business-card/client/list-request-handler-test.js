const assert = require("assert");
const httpMocks = require("node-mocks-http");
const sinon = require("sinon");
const uuid = require("uuid");
const BusinessCard = require("../../../../business-card/business-card");
const BusinessCardAppService = require("../../../../business-card/business-card-app-service");
const FakeBusinessCardAppService = require("../../../business-card/fake/fake-business-card-app-service");
const ListRequestHandler = require("../../../../utils/business-card/client/list-request-handler");

describe("ListRequestHandler", () => {
    var sandbox;
    var businessCardAppService;
    var listRequestHandler;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        businessCardAppService = new BusinessCardAppService();
        listRequestHandler = new ListRequestHandler(businessCardAppService);
    });

    it("when retrieving business cards is successful then it should return success and business cards", async () => {
        const businessCard1 = new BusinessCard(uuid.v4(), "foo", "bar");
        const businessCard2 = new BusinessCard(uuid.v4(), "quu", "quux");

        FakeBusinessCardAppService.setUpListSuccess(
            sandbox,
            businessCardAppService,
            businessCard1,
            businessCard2
        );

        const request = httpMocks.createRequest({ type: "GET" });
        const response = httpMocks.createResponse();

        await listRequestHandler.onRequest(request, response);

        assert.equal(response._getStatusCode(), 200);
        assert.equal(response._getData()[0].name, businessCard1.getName());
        assert.equal(response._getData()[0].title, businessCard1.getTitle());
        assert.equal(response._getData()[1].name, businessCard2.getName());
        assert.equal(response._getData()[1].title, businessCard2.getTitle());
    });

    it("when retrieving business cards is failed then it should return error", async () => {
        const error = new Error("ERR001");

        FakeBusinessCardAppService.setUpListFailed(
            sandbox,
            businessCardAppService,
            error
        );

        const request = httpMocks.createRequest({ type: "GET" });
        const response = httpMocks.createResponse();

        await listRequestHandler.onRequest(request, response);

        assert.equal(response._getStatusCode(), 400);
        assert.equal(response._getData().errorCode, error.message);
    });
});
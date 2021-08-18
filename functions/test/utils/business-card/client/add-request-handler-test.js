const assert = require("assert");
const httpMocks = require("node-mocks-http");
const sinon = require("sinon");
const uuid = require("uuid");
const AddRequestHandler = require("../../../../utils/business-card/client/add-request-handler");
const BusinessCardAppService = require("../../../../business-card/business-card-app-service");
const FakeBusinessCardAppService = require("../../../business-card/fake/fake-business-card-app-service");

describe("AddRequestHandler", () => {
    var sandbox;
    var businessCardAppService;
    var addRequestHandler;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        businessCardAppService = new BusinessCardAppService();
        addRequestHandler = new AddRequestHandler(businessCardAppService);
    });

    it("when adding is successful then it should return success and business card ID", async () => {
        const businessCardId = uuid.v4();

        FakeBusinessCardAppService.setUpAddSuccess(
            sandbox,
            businessCardAppService,
            businessCardId
        );

        const request = httpMocks.createRequest({
            method: "POST",
            body: {
                name: "foo",
                title: "bar"
            }
        });
        const response = httpMocks.createResponse();

        await addRequestHandler.onRequest(request, response);

        assert.equal(response._getStatusCode(), 200);
        assert.equal(response._getData().id, businessCardId);
    });

    it("when adding is failed then it should return error", async () => {
        const error = new Error("ERR001");
        
        FakeBusinessCardAppService.setUpAddFailed(
            sandbox,
            businessCardAppService,
            error
        );

        const request = httpMocks.createRequest({
            method: "POST",
            body: {
                name: "",
                title: "bar"
            }
        });
        const response = httpMocks.createResponse();

        await addRequestHandler.onRequest(request, response);

        assert.equal(response._getStatusCode(), 400);
        assert.equal(response._getData().errorCode, error.message);
    });
});
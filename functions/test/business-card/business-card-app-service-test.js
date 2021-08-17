const assert = require("assert");
const sinon = require("sinon");
const uuid = require("uuid");
const BusinessCard = require("../../business-card/business-card");
const BusinessCardRepository = require("../../business-card/business-card-repository");
const BusinessCardAppService = require("../../business-card/business-card-app-service");
const FakeBusinessCardRepository = require("./fake/fake-business-card-repository");

describe("BusinessCardAppService", () => {
    var sandbox;
    var businessCardRepository;
    var businessCardAppService;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        businessCardRepository = new BusinessCardRepository();
        businessCardAppService = new BusinessCardAppService(businessCardRepository);
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe("list", () => {
        it("when listing business cards then it should request them from repository", async () => {
            const businessCard = new BusinessCard(uuid.v4(), "foo", "bar");

            const listStub = FakeBusinessCardRepository.setUpListSuccess(
                sandbox,
                businessCardRepository,
                businessCard
            );

            await businessCardAppService.list();

            sinon.assert.called(listStub);
        });
    });

    describe("add", () => {
        it("when adding business card then it should add it to repository", async () => {
            const id = uuid.v4();
            const name = "foo";
            const title = "bar"

            const addStub = FakeBusinessCardRepository.setUpAddSuccess(
                sandbox,
                businessCardRepository,
                id
            )

            const newBusinessCardId = await businessCardAppService.add(name, title);

            sinon.assert.calledWith(addStub, name, title);
            assert.equal(newBusinessCardId, id);
        });
    });
});
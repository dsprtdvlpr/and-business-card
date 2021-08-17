const assert = require("assert");
const uuid = require("uuid");
const BusinessCardLocalDataSource = require("../../../../utils/business-card/data-store/business-card-local-data-source");
const FirebaseTestHelper = require("../../../firebase/firebase-test-helper");

describe("BusinessCardLocalDataSource", () => {
    const firebaseTestHelper = new FirebaseTestHelper();
    const firestore = firebaseTestHelper.firestore();
    const businessCardLocalDataSource = new BusinessCardLocalDataSource(firestore);

    afterEach(async () => {
        await firebaseTestHelper.clearFirestoreData()
    });

    after(async () => {
        await firestore.terminate();
    });

    describe("add", () => {
        it("when adding business card then it should add it to collection", async () => {
            const name = "foo";
            const title = "bar";

            await businessCardLocalDataSource.add(name, title);

            const businessCards = await businessCardLocalDataSource.list();

            assert.equal(businessCards[0].getName(), name);
            assert.equal(businessCards[0].getTitle(), title);
        });
    });
});
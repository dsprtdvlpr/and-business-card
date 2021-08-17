const firebase = require("@firebase/testing");

class FirebaseTestHelper {

    constructor() {
        this.app = firebase.initializeAdminApp({
            projectId: FirebaseTestHelper.PROJECT_ID
        });
    }

    firestore() {
        return this.app.firestore();
    }

    async clearFirestoreData() {
        await firebase.clearFirestoreData({
            projectId: FirebaseTestHelper.PROJECT_ID
        });
    }

    static get PROJECT_ID() {
        return "and-business-card";
    }

}

module.exports = FirebaseTestHelper;
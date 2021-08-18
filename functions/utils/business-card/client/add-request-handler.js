class AddRequestHandler {

    constructor(businessCardAppService) {
        this._businessCardAppService = businessCardAppService;
    }

    async onRequest(request, response) {
        response.set("Access-Control-Allow-Origin", "*");

        try {
            const { name, title } = request.body;
            const id = await this._businessCardAppService.add(name, title);
            
            response.status(200).send({ id: id });
        } catch (error) {
            response.status(400).send({ errorCode: error.message });
        }
    }

}

module.exports = AddRequestHandler;
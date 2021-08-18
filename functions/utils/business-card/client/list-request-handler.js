class ListRequestHandler {

    constructor(businessCardAppService) {
        this._businessCardAppService = businessCardAppService;
    }

    async onRequest(request, response) {
        response.set("Access-Control-Allow-Origin", "*");

        try {
            const businessCards = await this._businessCardAppService.list();
            
            response.status(200).send(businessCards.map(businessCard => {
                return {
                    name: businessCard.getName(),
                    title: businessCard.getTitle()
                };
            }));
        } catch (error) {
            response.status(400).send({ errorCode: error.message });
        }
    }

}

module.exports = ListRequestHandler;
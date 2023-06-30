const Request = require("./Request.js");
const Response = require("./Response.js");
const IndexController = require("./Controller/IndexController.js");

module.exports = function () {
    this.controller = new IndexController();
    this.handle = function (requestData) {
        const request = new Request(requestData[0], requestData[1], requestData[2]);
        if (request.info.role !== request.role) {
            return new Response();
        }
        return this.controller[request.command](request.info, new Response());
    };
}
/**
 * Created by kreenamehta on 7/17/17.
 */
var request = require("request");
var base_url = "http://localhost:3000/"

describe("Field Builder Server", function () {
    describe("GET /api/fieldbuilder", function () {
       it("returns status code 200", function () {
          request.get(base_url, function (error, response, body) {
              expect(response.statusCode).toBe(200);
              done();
          });
       });
    });
});
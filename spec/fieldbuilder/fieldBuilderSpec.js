/**
 * Created by kreenamehta on 7/17/17.
 */
var request = require("request");
var base_url = "http://localhost:3000/";
var expectedfield = {
    "label": "Sales region",
    "required": false,
    "choices": [
        "Asia",
        "Australia",
        "Western Europe",
        "North America",
        "Eastern Europe",
        "Latin America",
        "Middle East and Africa"
    ],
    "displayAlpha": true,
    "default": "North America"
};

describe("Field Builder Server", function () {

    describe("GET /api/fieldbuilder", function () {
       it("returns status code 200", function () {
          request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
              expect(response.statusCode).toBe(200);
              done();
          });
       });

        it("returns a field", function () {
           request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
               expect(response.body).toBe(expectedfield);
               done();
           })
        });

        it("field is defined", function () {
            request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
                expect(response.body).toBeDefined();
                done();
            })
        });

        it("field is defined", function () {
            request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
                expect(response.body.choices.length).toBe(7);
                done();
            })
        });

        it("field is defined", function () {
            request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
                expect(response.body.choices).toContain("Asia");
                done();
            })
        });

        it("field is defined", function () {
            request.get(base_url+"/api/fieldbuilder", function (error, response, body) {
                expect(response.body.choices).toNotContain("UK");
                done();
            })
        });
    });
});

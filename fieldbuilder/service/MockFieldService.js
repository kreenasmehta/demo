/**
 * Created by kreenamehta on 7/15/17.
 */
module.exports = function (app) {
    var field = {
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

    var request=require('request');

    app.get('/api/fieldBuilder', getField);
    app.put('/api/fieldBuilder', saveField);

    /**
     * gets the details of the field
     * @param req
     * @param res
     * @returns {{label: string, required: boolean, choices: string[], displayAlpha: boolean, default: string}}
     */
    function getField(req, res) {
        // Send back the field json in response
        res.send(field);
    }

    /**
     * saves the details of the field
     * @param req
     * @param res
     */
    function saveField(req, res) {
        // Updating the field with req.body which contains an updated field json
        field = req.body;

        // Posting field (json object) to mocky.io
        var mockyPostRequest = {
            url: 'http://www.mocky.io/v2/566061f21200008e3aabd919',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            json: field
        };

        request(mockyPostRequest, function(err, res, body) {
            if (res && (res.statusCode === 200 || res.statusCode === 201)) {
                // Logging the post data on the console
                console.log(body);
            }
        });

        // Send back the updated field json in response
        res.send(field);
    }
};
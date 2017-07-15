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

    app.get('/api/fieldBuilder', getField);
    app.put('/api/fieldBuilder', saveField);

    /**
     *
     * @param req
     * @param res
     * @returns {{label: string, required: boolean, choices: string[], displayAlpha: boolean, default: string}}
     */
    function getField(req, res) {

        res.send(field);
    }

    /**
     *
     * @param req
     * @param res
     */
    function saveField(req, res) {


        field = req.body;
        res.send(field);
    }
};
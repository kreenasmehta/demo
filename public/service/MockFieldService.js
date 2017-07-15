/**
 * Created by kreenamehta on 7/11/17.
 */
(function () {
    angular
        .module("FieldBuilderApp")
        .factory("MockFieldService", MockFieldService);
    
    function MockFieldService($http) {

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


        var FieldService = {
            getField: getField,
            saveField: saveField
        };

        return FieldService;

        /**
         * gets the field
         */
        function getField(id) {
            //return $http.get('http://www.mocky.io/v2/566061f21200008e3aabd919');
            return field;

        }

        /**
         * saves the field
         */
        function saveField(fieldJson) {
            field = fieldJson;
            // $http.put('http://www.mocky.io/v2/566061f21200008e3aabd919', fieldJson);
            return field;
        }
    }
})();
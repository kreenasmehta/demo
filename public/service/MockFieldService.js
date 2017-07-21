/**
 * Created by kreenamehta on 7/11/17.
 * Client side field builder service
 */
(function () {
    angular
        .module("FieldBuilderApp")
        .factory("MockFieldService", MockFieldService);
    
    function MockFieldService($http) {

        var FieldService = {
            getField: getField,
            saveField: saveField
        };

        return FieldService;

        /**
         * gets the details of the field
         * @param id - id of the required field
         */
        function getField(id) {
            return $http.get('/api/fieldBuilder');
        }

        /**
         * saves the details of the field
         * @param fieldJson - json object of the field
         */
        function saveField(fieldJson) {
            return $http.put('/api/fieldBuilder', fieldJson);
        }
    }
})();
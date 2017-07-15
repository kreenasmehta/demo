/**
 * Created by kreenamehta on 7/11/17.
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
         * gets the field
         */
        function getField(id) {
            return $http.get('/api/fieldBuilder');

        }

        /**
         * saves the field
         */
        function saveField(fieldJson) {
            return $http.put('/api/fieldBuilder', fieldJson);
        }
    }
})();
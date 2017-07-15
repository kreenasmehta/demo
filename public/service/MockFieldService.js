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
            var jsonData = {"x":"Apple", "y":"Mango"};
            // http://www.mocky.io/v2/566061f21200008e3aabd919
            $.ajax({
                url: 'http://www.mocky.io/v2/596a653a110000980701cd97',
                type: 'POST',
                dataType: 'json',
                data: jsonData,
                success: function() { console.log(status) }
            });
            return $http.put('/api/fieldBuilder', fieldJson);
        }
    }
})();
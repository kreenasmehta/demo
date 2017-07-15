/**
 * Created by kreenamehta on 7/11/17.
 */
(function () {
    angular
        .module("FieldBuilderApp")
        .controller("FieldBuilderController", FieldBuilderController);

    function FieldBuilderController($routeParams, MockFieldService) {

        var vm = this;
        var fieldId = $routeParams["id"];
        vm.items = ['Display choices in alphabetical order','Display choices in random order'];
        vm.getField = getField;
        vm.saveField = saveField;
        vm.selectItem = selectItem;

        function init() {
            getField(fieldId);
        }

        init();

        /**
         * gets the details of the field
         */
        function getField(id) {
            var field = MockFieldService.getField(id);
            vm.field = field;
            if(vm.field.displayAlpha){
                selectItem(vm.items[0]);
            } else{
                selectItem(vm.items[1]);
            }

        }

        /**
         * saves the details of the field
         */
        function saveField(fieldJson) {
            var updatedField = MockFieldService.saveField(fieldJson);
            console.log(updatedField);

        }

        /**
         *
         * @param item
         */
        function selectItem(item) {
            vm.selectedItem = item;
        }

    }
})();
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
        var maxChoiceCharacters = 40;
        vm.items = ['Display choices in alphabetical order','Display choices in random order'];
        vm.getField = getField;
        vm.saveField = saveField;
        vm.selectItem = selectItem;
        vm.validateChoices = validateChoices;

        function init() {
            getField(fieldId);
        }

        init();

        /**
         * gets the details of the field
         */
        function getField(id) {
            MockFieldService.getField(id)
                .success(function (field) {
                    vm.field = field;
                    validateChoices(field.choices);
                    if(vm.field.displayAlpha){
                        selectItem(vm.items[0]);
                    } else{
                        selectItem(vm.items[1]);
                    }
                })
                .error(function (error) {
                    console.log(error);
                });
        }

        /**
         * saves the details of the field
         */
        function saveField(fieldJson) {
            var updatedField = MockFieldService.saveField(fieldJson)
                .success(function (updatedField) {
                    console.log(updatedField);
                })
                .error(function (error) {
                    console.log(error);
                });
        }

        /**
         *
         * @param item
         */
        function selectItem(item) {
            vm.selectedItem = item;
        }

        /**
         * Validates the updated choices
         * sets choiceError if individual choices are longer than 40 characters
         * @param choices
         */
        function validateChoices(choices) {
            // longerChoice is set to false
            var longerChoice = false;

            // traverse through all the choices
            for(var i in choices){
                // if current choice is longer than 40 characters in length
                if(choices[i].length > maxChoiceCharacters){
                    // set longerChoice to true, break out of the loop
                    longerChoice = true;
                    break;
                }

            }

            /*
            of longerChoice is true, display the choiceError,
            else set the choiceError to false
             */
            if(longerChoice){
                vm.choiceError = "Choices cannot be longer than 40 characters";
            } else{
                vm.choiceError = false;
            }
        }

    }
})();
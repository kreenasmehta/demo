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
        var maxTotalChoices = 50;
        vm.items = ['Display choices in alphabetical order','Display choices in random order'];
        vm.getField = getField;
        vm.saveField = saveField;
        vm.selectItem = selectItem;
        vm.validateChoices = validateChoices;
        vm.checkIfDefaultValueExists = checkIfDefaultValueExists;
        vm.addNewDefaultToChoices = addNewDefaultToChoices;

        /**
         * init method gets called when the controller is loaded
         */
        function init() {
            getField(fieldId);
        }

        init();

        /**
         * gets the details of the field
         * @param id - id of the required field
         */
        function getField(id) {
            MockFieldService.getField(id)
                .success(function (field) {
                    // assign field to vm.field to display on the view
                    vm.field = field;
                    // validate the choices field
                    validateChoices(field.choices);
                    /*
                    if displayAlpha is true,
                    select - Display choices in alphabetical order
                    else select - Display choices in random order
                     */
                    if(vm.field.displayAlpha){
                        selectItem(vm.items[0]);
                    } else{
                        selectItem(vm.items[1]);
                    }
                })
                .error(function (error) {
                    // logs error on the console
                    console.log(error);
                });
        }

        /**
         * saves the details of the field
         * @param fieldJson - json object of the field
         */
        function saveField(fieldJson) {
            // check if the default value exists in the choices
            var defaultValueExists = checkIfDefaultValueExists(fieldJson);
            if(!defaultValueExists){
                // if false, add the new default value to the list
                fieldJson = addNewDefaultToChoices(fieldJson);
            }
            var updatedField = MockFieldService.saveField(fieldJson)
                .success(function (updatedField) {
                    // logs the updated field to the console
                    vm.field = updatedField;
                    console.log(updatedField);
;                })
                .error(function (error) {
                    // logs error on the console
                    console.log(error);
                });
        }

        /**
         * selects an item form the items array
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

            /*
            if the total number of choices are more than 50,
            display exceedMaxChoices error
            else set exceedMaxChoices to false
             */
            if(choices.length > maxTotalChoices){
                vm.exceedMaxChoices = "Total number of choices cannot be more than 50"
            } else{
                vm.exceedMaxChoices = false;
            }

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

        /**
         * Checks if the given default value is in the choices
         * @param fieldJson - json object of the field
         * @returns {boolean} - returns true oif present
         * otherwise, false
         */
        function checkIfDefaultValueExists(fieldJson) {
            var choices = fieldJson.choices;
            var defaultValue = fieldJson.default;
            if(choices.includes(defaultValue)){
                return true;
            } else{
                return false;
            }

        }

        /**
         * Adds the new default value to the list
         * @param fieldJson - json object of the field
         * @returns {*} - returns updated field json
         * after adding the new default value to the list of existing choices
         */
        function addNewDefaultToChoices(fieldJson) {
            var defaultValue = fieldJson.default;
            // push the new default value of the list of choices
            fieldJson.choices.push(defaultValue);
            return fieldJson;
        }

    }
})();
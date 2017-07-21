/**
 * Created by kreenamehta on 7/11/17.
 * Route configuration
 */
(function () {
    angular
        .module("FieldBuilderApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/fieldBuilder/:id", {
                templateUrl: "view/fieldBuilder.html",
                controller: "FieldBuilderController",
                controllerAs: "model"
            })
            .when("/list", {
                templateUrl: "view/list.html"
            })
            .otherwise({
                redirectTo: "/list"
            });

    }
})();
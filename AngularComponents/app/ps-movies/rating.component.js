(function () {
    "use strict";

    var module = angular.module("psMovies");

    function buildEntries(value, max) {
        var entries = [];

        for (var i = 0; i < max; i++) {
            var icon = i < value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }

        return entries;
    }

    module.component("rating", {
        templateUrl: "app/ps-movies/rating.component.html",
        bindings: {
            value: "<", //input
            max: "<",
            setRating: "&" //output
        },
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.$onInit = function () {
                model.entries = buildEntries(model.value, model.max);
            };

            model.$onChanges = function () {
                model.entries = buildEntries(model.value, model.max);
            };
        }
    });

}());
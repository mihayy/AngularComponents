(function () {
    "use strict";

    var module = angular.module("psMovies");


    function fetchMovies($http) {
        return $http.get("/movies.json").then(function (response) {
            return response.data;
        });
    }

    function controller($http) {

        var model = this;

        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                model.movies = movies;
            });
        };

        model.message = "Hello from a component controller";

        model.changeMessage = function () {
            model.message = "New Message";
        };

        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        };

        model.setRating = function (movie, newRating) {
            movie.rating = newRating;
        }
    }

    module.component("movieList", {
        templateUrl: "app/ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

}());
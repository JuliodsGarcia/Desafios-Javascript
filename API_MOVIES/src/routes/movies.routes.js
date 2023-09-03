const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRoutes = Router();

const MoviesController = new moviesController();

moviesRoutes.post("/:user_id", MoviesController.create);

module.exports = moviesRoutes;

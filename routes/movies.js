const express = require('express');
const router = express.Router();
const Movie = require("../models/models.js");

router.get('/movies', async (request, response) => {
    try {
      const movies = await Movie.find();
      console.log(movies)
      response.render('movies', {movies});
    } catch (err) {
      console.error(err);
    }
});

router.get('/movie/:id', async (request, response) => {
try {
    const movieDetails = await Movie.findById(request.params.id);
    response.render('movie-details', movieDetails);
} catch (err) {
    console.log(err);
}
});

module.exports = router;

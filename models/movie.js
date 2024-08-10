const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const movieSchema = new mongoose.Schema({
  title_x: { type: String, required: true },
  imdb_id: { type: String },
  poster_path: { type: String },
  wiki_link: { type: String },
  title_y: { type: String },
  original_title: { type: String },
  is_adult: { type: Number },  // Boolean values are often stored as 0 or 1
  year_of_release: { type: Number },
  runtime: { type: Number },
  genres: { type: String },
  imdb_rating: { type: Number },
  imdb_votes: { type: Number },
  story: { type: String },
  summary: { type: String },
  tagline: { type: String },
  actors: { type: String },
  wins_nominations: { type: String },
  release_date: { type: String },
});

const Movie = mongoose.model('Movie', movieSchema, 'bollymovies');

module.exports = Movie;

const express = require("express");
const router = express.Router();
const Movie = require("../models/movie");

router.get('/random', async (req,res) => {
    try{
        const mov = await Movie.aggregate([{ $sample: { size: 1 } }])
        res.status(200).json(mov[0])
    } catch (err) {
        res.status(400).json({error: err})
    }
})

module.exports = router;
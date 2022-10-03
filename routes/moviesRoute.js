const express = require('express');
const router = express.Router();
const mongodb = require ("mongodb");

const movie = require('../models/movie')

router.get("/getallmovies" , async(req,res) => {

    try {
        const movies = await movie.find({})
        res.send(movies)
    } catch (error) {
        return res.status(400).json({ message : error });
    }

});

router.get("/getmoviebyid/:movieid" , async(req,res) => {

    const movieid = req.params.movieid

    try {
        const movie = await movie.findOne({_id : mongodb.ObjectId(movieid)})
        console.log("hello")
        res.send(movie)
    } catch (error) {
     res.status(400).json({ message : error });
        console.log(error)
    }

});

module.exports = router;
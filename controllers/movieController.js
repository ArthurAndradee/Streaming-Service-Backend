import Movie from '../models/movieModel.js';

export const getAllMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find(); 
        res.json(allMovies);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

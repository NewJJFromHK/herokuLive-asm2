import express from 'express';
const router = express.Router();

router.get('/movie-list', DisplayMovieList);

export default router;
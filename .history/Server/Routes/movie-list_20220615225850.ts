import express from 'express';
const router = express.Router();

import {DisplayMovieList}

router.get('/movie-list', DisplayMovieList);

export default router;
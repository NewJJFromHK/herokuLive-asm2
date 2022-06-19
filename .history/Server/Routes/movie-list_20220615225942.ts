import express from 'express';
const router = express.Router();

import {DisplayMovieList} from '../Controllers/mov'

router.get('/movie-list', DisplayMovieList);

export default router;
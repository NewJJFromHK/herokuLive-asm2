import express from 'express';
const router = express.Router();

import {DisplayMovieList} from '../Controllers'

router.get('/movie-list', DisplayMovieList);

export default router;
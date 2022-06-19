import express from 'express';
const router = express.Router();

import {DisplayMovieList} from '../coddidd'

router.get('/movie-list', DisplayMovieList);

export default router;
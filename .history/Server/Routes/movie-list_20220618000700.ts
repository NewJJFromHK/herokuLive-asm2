import express from 'express';
const router = express.Router();

import {AuthGuard} from '../'

import {DisplayMovieList} from '../Controllers/movie-list';

router.get('/movie-list', DisplayMovieList);

export default router;
import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayMovieList, DisplayProjectPage, DisplayServicesPage} from "../Controllers/index"

//The other way to import the controller module
// import * as IndexController from '../Controllers/index';
//IndexController.

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectPage);

/* Display services page. */
router.get('/services', DisplayServicesPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

/***** Temporary  */
router.get('/movies-list', DisplayMovieList);
export default router;

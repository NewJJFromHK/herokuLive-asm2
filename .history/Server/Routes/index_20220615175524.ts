import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayAboutPage, DisplayHomePage, DisplayProjectPage} from "../Controllers/index"

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectPage);

/* Display services page. */
router.get('/services', DisplaySe);

/* Display contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact Us', page: 'contact' });
});

export default router;

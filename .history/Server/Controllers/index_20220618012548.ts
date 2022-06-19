import express from 'express';

import { UserdisplayName } from "../Util";

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
}

export function DisplayProjectPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: ''  });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Our Services', page: 'services',  displayName: ''  });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact',  displayName: ''  });
}

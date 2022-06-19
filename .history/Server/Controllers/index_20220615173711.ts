import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact' });res.render('index', { title: 'Contact Us', page: 'contact' });
}
import express from 'express';

//Display Functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

//Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Our Projects', page: 'projects' });
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Our Services', page: 'services' });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact' });
}

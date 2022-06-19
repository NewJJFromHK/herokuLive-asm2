import express from 'express';
import { CallbackError } from 'mongoose';

// import the Business Contact Model
import businessContact from '../Models/businessContact';

import { UserDisplayName  } from '../Util';

export function DisplayBusinessContactListPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    businessContact.find(function(err, businessContactCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Business Contact List', page: 'businessContact-list', businessContact: businessContactCollection, displayName:  UserDisplayName(req)  });
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  res.render('index', { title: 'Add', page: 'edit', businessContact: '', displayName:  UserDisplayName(req) })
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the db and read the business contact into the edit page
  businessContact.findById(id, {}, {}, function(err, businessContactToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', businessContact: businessContactToEdit, displayName:  UserDisplayName(req) })
  });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  // instantiate a new Business Contact to Add
  let newBusinessContact = new Movi
  ({
    "Name": req.body.movieName,
    "Director": req.body.movieDirector,
    "Year": req.body.movieYear,
    "Rating": req.body.movieRating
  });

  // Insert the new Movie object into the database (movies collection)
  Movie.create(newMovie, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new movie has been added -> refresh the movie-list
    res.redirect('/movie-list');
  })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // instantiate a new Movie to Edit
  let updatedMovie = new Movie
  ({
    "_id": id,
    "Name": req.body.movieName,
    "Director": req.body.movieDirector,
    "Year": req.body.movieYear,
    "Rating": req.body.movieRating
  });

  // update the movie in the database
  Movie.updateOne({_id: id}, updatedMovie, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful -> go to the movie-list page
    res.redirect('/movie-list');
  });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the database and delete the movie
  Movie.remove({_id: id}, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // delete was successful
    res.redirect('/movie-list');
  });
}

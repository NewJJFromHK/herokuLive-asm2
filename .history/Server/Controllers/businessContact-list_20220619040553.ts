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
  let newBusinessContact = new businessContact
  ({
    "Contact Name": req.body.ContactName,
    "Contact Number": req.body.ContactNumber,
    "Email Address": req.body.EmailAddress
  });

  // Insert the new Business Contact object into the database (businessContact collection)
  businessContact.create(newBusinessContact, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new Business Contact has been added -> refresh the businessContact-list
    res.redirect('/businessContact-list');
  })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // instantiate a new Business Contact to Edit
  let updatedBusinessContact = new businessContact
  ({
    "_id": id,
    "Contact Name": req.body.businessContactContactName,
    "Contact Number": req.body.ContactNumber,
    "Email Address": req.body.EmailAddress
  });

  // update the Business Contact in the database
  businessContact.updateOne({_id: id}, updatedBusinessContact, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful -> go to the businessContact-list page
    res.redirect('/businessContact-list');
  });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the database and delete the businessContact
  businessContact.remove({_id: id}, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // delete was successful
    res.redirect('/businessContact-list');
  });
}

import express from 'express';
import { CallbackError } from 'mongoose';

// import the Business Contact Model
import BusinessContact from '../Models/businessContact';

import { UserDisplayName  } from '../Util';

export function DisplayBusinessContactListPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    BusinessContact.find(function(err, BusinessContactCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Business Contact List', page: 'businessContact-list', BusinessContact: BusinessContactCollection, displayName:  UserDisplayName(req)  });
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
  BusinessContact.findById(id, {}, {}, function(err, BusinessContactToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', BusinessContact: BusinessContactToEdit, displayName:  UserDisplayName(req) })
  });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  // instantiate a new Business Contact to Add
  let newBusinessContact = new BusinessContact
  ({
    "Contact Name": req.body.businessContactName,
    "Contact Number": req.body.businessContactNumber,
    "Email Address": req.body.businessContactEmailAddress
  });

  // Insert the new Business Contact object into the database (businessContact collection)
  BusinessContact.create(newBusinessContact, function(err: CallbackError)
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
  let updatedBusinessContact = new BusinessContact
  ({
    "_id": id,
    "Contact Name": req.body.businessContactName,
    "Contact Number": req.body.businessContactNumber,
    "Email Address": req.body.businessContactEmailAddress
  });

  // update the Business Contact in the database
  BusinessContact.updateOne({_id: id}, updatedBusinessContact, function(err: CallbackError)
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
  BusinessContact.remove({_id: id}, function(err: CallbackError)
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

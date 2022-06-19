"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayBusinessContactListPage = void 0;
const businessContact_1 = __importDefault(require("../Models/businessContact"));
const Util_1 = require("../Util");
function DisplayBusinessContactListPage(req, res, next) {
    businessContact_1.default.find(function (err, BusinessContactCollection) {
        if (err) {
            console.error(err.message);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'businessContact-list', BusinessContact: BusinessContactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayBusinessContactListPage = DisplayBusinessContactListPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', businessContact: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    businessContact_1.default.findById(id, {}, {}, function (err, BusinessContactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', BusinessContact: bBusinessContactToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newBusinessContact = new businessContact_1.default({
        "Contact Name": req.body.businessContactName,
        "Contact Number": req.body.businessContactNumber,
        "Email Address": req.body.businessContactEmailAddress
    });
    businessContact_1.default.create(newBusinessContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/businessContact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedBusinessContact = new businessContact_1.default({
        "_id": id,
        "Contact Name": req.body.businessContactName,
        "Contact Number": req.body.businessContactNumber,
        "Email Address": req.body.businessContactEmailAddress
    });
    businessContact.updateOne({ _id: id }, updatedBusinessContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/businessContact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    businessContact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/businessContact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=businessContact-list.js.map
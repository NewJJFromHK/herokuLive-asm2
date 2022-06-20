/*File Name: businessContact.js
Student Name: Kin Fung Lee
Student ID 301194080
Date: 19 June 2022 */

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinessContactSchema = new Schema({
    ContactName: String,
    ContactNumber: String,
    EmailAddress: String
}, {
    collection: "businessContact"
});
const Model = mongoose_1.default.model("businessContact", BusinessContactSchema);
exports.default = Model;
//# sourceMappingURL=businessContact.js.map
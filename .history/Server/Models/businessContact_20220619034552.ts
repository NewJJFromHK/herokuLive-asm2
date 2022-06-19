// Step 1 - import mongoose - database adapter
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

// Step 2 - Create a Schema that matches the data in the collection
const BusinessContactSchema = new Schema
({
    ContactName: String,
    ContactNumber : String,
    EmailAddress : String
},
{
    collection: "Business Contact"
});

// Step 3- Create a Model using the Schema
const Model = mongoose.model("Business Contact", BusinessContactSchema);

// Step 4 - Export the Model -> converts this file into a module
export default Model;
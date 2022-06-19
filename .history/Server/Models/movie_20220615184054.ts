//Step 1 - Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//Step 
const MovieSchema = new Schema
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String 
},
{
    collection: "movies"
});

const Model = mongoose.model("Movies", MovieSchema);
export default Model;
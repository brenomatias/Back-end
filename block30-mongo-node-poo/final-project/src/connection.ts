import mongoose from "mongoose";

function connectToDatabase(){
  return mongoose.connect('mongodb://example:example@localhost:27017/GlassesTrybe?authSource=admin')
}

export default connectToDatabase;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/GlassesTrybe?authSource=admin',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
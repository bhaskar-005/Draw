'use server'
import mongoose, { Mongoose } from 'mongoose';

// Get MongoDB URL from environment variables
const db_url = process.env.MONGODB_URL ;

// Define interface for MongoDB connection
interface MongoDBConnection {
    connection: Mongoose | null; // Cached MongoDB connection
    promise: Promise<Mongoose> | null; // Cached connection promise
}

// Initialize global cache for MongoDB connection
let cached: MongoDBConnection = (global as any).mongoose;

// If cache doesn't exist, create one
if (!cached) {
    cached = (global as any).mongoose = { connection: null, promise: null };
}

// Function to establish MongoDB connection
const DBconnection = async () => {
    if (cached.connection) {
        // If connection is already cached, return it
        return cached.connection;
    }

    if (!db_url) {
        // If MongoDB URL is not provided, log an error
        console.log('No MongoDB URL found');
        return;
    }

    try {
        // Connect to MongoDB using mongoose.connect method
        cached.connection = await mongoose.connect(db_url,{
            bufferCommands: false
        });
        return cached.connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

export default DBconnection;

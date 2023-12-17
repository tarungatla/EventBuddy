import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize a cache object to store the Mongoose connection and promise
let cached = (global as any).mongoose || { conn: null, promise: null };

// Export an asynchronous function for connecting to the MongoDB database
export const connectToDatabase = async () => {
  // If a connection is already cached, return the cached connection
  if (cached.conn) return cached.conn;

  // Throw an error if the MongoDB URI is missing
  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  // Establish a connection to MongoDB using Mongoose
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'EventBuddy',          // Specify the database name
    bufferCommands: false,       // Disable buffering of commands
  });

  // Wait for the connection promise to resolve
  cached.conn = await cached.promise;

  // Return the cached connection
  return cached.conn;
}

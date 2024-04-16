import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const client = await MongoClient.connect('mongodb+srv://testuser:5uNKwgizuS1sSSGy@cluster0.1dd0fhc.mongodb.net/');

  return client;
};

import { hashPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  const { email, password } = data;

  if (!email || email.includes('@') || !password || password.trim().length < 7) {
    res.status(422).json({ message: 'Invalid Input - Email or Password invalid' });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'Created User!', id: result.insertedId });
};

export default handler;

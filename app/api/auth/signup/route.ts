import { hashPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    return NextResponse.json({ message: 'Could not connect to the database.' }, { status: 500 });
  }

  const db = client?.db();

  const hashedPassword = await hashPassword(password);

  try {
    const result = await db.collection('users').insertOne({ email: email, password: hashedPassword });
    console.log('this is the result', result);
  } catch (error) {
    console.log(error);
    client.close();
    return NextResponse.json({ message: 'Storing message failed!' }, { status: 500 });
  }

  client.close();

  return NextResponse.json({ message: 'Created User!' }, { status: 201 });
}

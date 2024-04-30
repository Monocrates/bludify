import { verifyPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';
import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();

        const userCollection = client.db().collection('users');

        const user = await userCollection.findOne({ email: credentials?.email });

        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials?.password as string, user.password);

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        client.close();

        return { email: user.email, id: user._id };
      },
    }),
  ],
});

export { handler as GET, handler as POST };

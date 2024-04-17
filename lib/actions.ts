'use server';

export const createUser = async (email: string, password: string) => {
  console.log(email, password);
  const response = await fetch('http://localhost:3000/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
};

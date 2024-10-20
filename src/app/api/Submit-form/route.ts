import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, mobile, message }: ContactFormData = req.body;

    const client = new MongoClient(process.env.MONGODB_URI as string);
    
    try {
      await client.connect();
      const db = client.db('your_database_name');

      const result = await db.collection('contacts').insertOne({
        name,
        email,
        mobile,
        message,
        createdAt: new Date()
      });

      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ message: 'Error submitting form' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

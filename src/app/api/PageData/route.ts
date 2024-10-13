

// import { NextResponse } from 'next/server';
// import connectMongo from '@/app/lib/mongodb';

// export async function GET() {
//   try {
//     // Attempt to connect to MongoDB
//     await connectMongo
//     console.log('MongoDB connection successful');

//     // Respond with a success message
//     return NextResponse.json({ message: 'Hello, Next.js 14! Connected to MongoDB.' }, { status: 200 });
//   } catch (error) {
//     console.error('MongoDB connection failed:', error);
//     return NextResponse.json({ message: 'Failed to connect to MongoDB', error }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/app/lib/mongodb';
import PageData from '@/app/models/pageDataSchema'

export async function POST(req: NextRequest) {
  await connectMongo();  // Connect to the database
  
  try {
    const { title, image, text } = await req.json();  // Get data from the request body
    
    // Validation (optional, can be enhanced)
    if (!title || !image || !text) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Create new document
    const newPageData = new PageData({
      title,
      image,
      text
    });

    // Save to the database
    const savedPageData = await newPageData.save();

    return NextResponse.json({ message: 'Page data added successfully', data: savedPageData }, { status: 201 });

  } catch (error) {
    console.error('Error adding page data:', error);
    return NextResponse.json({ message: 'Error adding page data' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
    await connectMongo();  // Connect to the database
    
    const title = req.nextUrl.searchParams.get('title');  // Get title from query params
  
    if (!title) {
      return NextResponse.json({ message: 'Title is required' }, { status: 400 });
    }
  
    try {
      // Find the document by title
      const pageData = await PageData.findOne({ title });
  
      if (!pageData) {
        return NextResponse.json({ message: 'No data found for the provided title' }, { status: 404 });
      }
  
      return NextResponse.json(pageData, { status: 200 });
    } catch (error) {
      console.error('Error fetching page data:', error);
      return NextResponse.json({ message: 'Error fetching data' }, { status: 500 });
    }
}
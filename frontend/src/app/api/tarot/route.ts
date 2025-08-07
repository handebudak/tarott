import { NextRequest, NextResponse } from 'next/server';

// Express.js API URL
const EXPRESS_API_URL = process.env.EXPRESS_API_URL || 'http://localhost:5000';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Frontend request body:', body);
    
    // Request type
    let endpoint = '/api/tarot/reading';
    if (body.type === 'single') {
      endpoint = '/api/tarot/single-card';
    } else if (body.type === 'three') {
      endpoint = '/api/tarot/three-cards';
    }
    
    const fullUrl = `${EXPRESS_API_URL}${endpoint}`;
    console.log('API endpoint:', fullUrl);
    console.log('EXPRESS_API_URL:', EXPRESS_API_URL);
    
    // Express.js API request
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API response data:', data);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API Error:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: 'Tarot API Error' },
      { status: 500 }
    );
  }
} 
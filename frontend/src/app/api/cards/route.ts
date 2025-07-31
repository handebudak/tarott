import { NextRequest, NextResponse } from 'next/server';

const EXPRESS_API_URL = process.env.EXPRESS_API_URL || 'http://localhost:5000';

export async function GET() {
  try {
    console.log('Fetching cards from:', `${EXPRESS_API_URL}/api/cards`);
    
    const response = await fetch(`${EXPRESS_API_URL}/api/cards`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Cards API response:', data);
    
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Cards API Error:', error);
    return NextResponse.json(
      { error: 'Kart bilgileri alınırken hata oluştu' },
      { status: 500 }
    );
  }
} 
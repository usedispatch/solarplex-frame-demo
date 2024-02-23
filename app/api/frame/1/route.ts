import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@usedispatch/solarplex-frame-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  console.log('req: ', body);
  const text = 'We are on /api/frame/1 now! ZZZZZ';
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `🌲 Text: ${text}`,
        },
      ],
      image: `${NEXT_PUBLIC_URL}/park-2.png`,
      post_url: `${NEXT_PUBLIC_URL}/api/frame/2`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@usedispatch/solarplex-frame-utils';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const {message} = await getFrameMessage(body);
  let text: string = 'default'
  switch (message?.button) {
    case 1: 
      text = 'button 1 was clicked' 
      console.log(text)
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `🌲 Text: ${text}`,
            },
            {
              label: `Button 2`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame`,
        }),
      );
    case 2:
      text = 'button 2 was clicked' 
      console.log(text)
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `Button 1`,
            },
            {
              label: `🌲 Text: ${text}`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-1.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame`,
        }),
      );
    default: 
      text = 'Home base of this frame!'    
      console.log(text)
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `🌲 Text: ${text}`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame`,
        }),
      );
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

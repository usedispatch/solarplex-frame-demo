import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '../../../splx-frame-lib/index';
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
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame/1`,
        }),
      );
    case 2:
      text = 'button 2 was clicked' 
      console.log(text)
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `🌲 Text: ${text}`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame/1`,
        }),
      );
    default: 
      text = 'default unhandled case'    
      console.log(text)
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `🌲 Text: ${text}`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame/1`,
        }),
      );
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

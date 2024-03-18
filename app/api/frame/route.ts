import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@usedispatch/solarplex-frame-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const {message} = await getFrameMessage(body);
  let text: string = 'default'
  switch (message?.button) {
    case 1: 
      text = 'button 1 was clicked' 
      return new NextResponse(
        getFrameHtmlResponse({
          buttons: [
            {
              label: `🌲 You submitted the text: ${message.input}`,
            },
          ],
          image: `${NEXT_PUBLIC_URL}/park-2.png`,
          post_url: `${NEXT_PUBLIC_URL}/api/frame`,
        }),
      );
    case 2:
      text = 'view transaction on xray!' 
      const txn = `${NEXT_PUBLIC_URL}/api/txn/${body.untrustedData.txnSignature}`
      const res = getFrameHtmlResponse({
        buttons: [
          {
            label: `Button 1`,
          },
          {
            label: `🌲 Text: ${text}`,
            action: 'post_redirect',
            post_url: `txn`,
          },
          {
            label: 'Share transaction on Twitter',
            action: 'share',
            text: `Check out this transaction I made on a Frame on Solarplex! ${txn}`
          }
        ],
        image: `${NEXT_PUBLIC_URL}/park-1.png`,
        post_url: `${NEXT_PUBLIC_URL}/api/frame`,
      })

      return new NextResponse(res);
    default: 
      text = 'Home base of this frame!'    
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

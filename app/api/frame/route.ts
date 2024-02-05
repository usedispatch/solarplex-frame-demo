import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '../../splx-frame/index';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  console.log('req: ', req);
  
  
  // let accountAddress: string | undefined = '';
  // let text: string | undefined = '';

  // const body: FrameRequest = await req.json();
  // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  // if (isValid) {
  //   accountAddress = message.interactor.verified_accounts[0];
  // }

  // if (message?.input) {
  //   text = body.untrustedData.inputText;
  // }

  const text = 'my button';
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

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

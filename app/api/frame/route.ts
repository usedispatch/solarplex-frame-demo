import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '../../splx-frame/index';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  console.log('req: ', body);
  

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

  const text = 'Click to get /api/frame/1';
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

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

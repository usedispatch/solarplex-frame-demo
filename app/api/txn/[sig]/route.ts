

import { NextRequest, NextResponse } from 'next/server';

async function getResponse(signature: string): Promise<NextResponse> {
  return NextResponse.redirect(
    `https://xray.helius.xyz/tx/${signature}`,
    { status: 302 },
  );
}

export async function POST(request: Request, { params }: { params: { sig: string } }): Promise<Response> {
  const signature = params.sig;
  return getResponse(signature);
}

export const dynamic = 'force-dynamic';

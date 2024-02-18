# A Frame in 100 lines (or less)

NB: Forked from the original farcaster frames and modified to support Solarplex
H/T to @zizzamia on [Warpcast](https://warpcast.com/zizzamia) or [X](https://twitter.com/Zizzamia).


Solarplex Frames in less than 100 lines, and ready to be deployed to Vercel.

<br />

<br />

## App Routing files

- app/
  - redirect-frame/
    - [page.tsx](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appredirect-framepagetsx)
  - [config.ts](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appconfigts)
  - [layout.tsx](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#applayouttsx)
  - [page.tsx](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#apppagetsx)
- api/
  - frame/
    - [route.ts](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appapiframeroutets)
  - frame-redirect/
    - [route.ts](https://github.com/Zizzamia/a-frame-in-100-lines?tab=readme-ov-file#appapiframe-redirectroutets)

<br />

### `app/page.tsx`

```tsx
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Click Me',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'Tell me a boat story',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
```

### `app/layout.tsx`

```tsx
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### `app/config.ts`
```ts
export const NEXT_PUBLIC_URL = 'https://zizzamia.xyz';
```

### `app/redirect-frame/page.tsx`
```tsx
import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Redirect to cute dog pictures',
      action: 'post_redirect',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  post_url: `${NEXT_PUBLIC_URL}/api/frame-redirect`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
```

### `app/api/frame/route.ts`

```ts
import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

const NEXT_PUBLIC_URL = 'https://zizzamia.xyz';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = '';
  let text: string | undefined = '';

  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0];
  }

  if (body?.untrustedData?.inputText) {
    text = body.untrustedData.inputText;
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Text: ${text}`,
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
```

### `app/api/frame-redirect/route.ts`

```ts
import { NextResponse } from 'next/server';

async function getResponse(): Promise<NextResponse> {
  return NextResponse.redirect(
    'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
    { status: 302 },
  );
}

export async function POST(): Promise<Response> {
  return getResponse();
}

export const dynamic = 'force-dynamic';
```

<br />

## Resources

- [Solarplex Frames documentation](https://docs.solarplex.xyz)

<br />

## The Team and Our Community ☁️ 🌁 ☁️

@solarplex_xyz
[[add githubs]]

<br />

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

import { getFrameMetadata } from './splx-frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'button robert',
    },
    {
      label: 'button zayyan',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'click one of these buttons please',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});


export const metadata: Metadata = {
  title: 'solarplex frame demo',
  description: 'LFG',
  openGraph: {
    title: 'solarplex frame demo',
    description: 'solarplex frame demo ftw',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>solarplex frame demo</h1>
    </>
  );
}

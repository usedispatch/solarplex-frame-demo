import { getFrameMetadata } from '@usedispatch/solarplex-frame-sdk';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

// This is the first page that Solarplex frame parser sees
// Solarplex frames support the following spec
// TODO(viksit): add spec link here

// Create the first frame metadata
// Add 2 buttons, an image, 
// NOTE: Text input is coming soon, not yet supported. Here for completeness.
const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Button 1',
    },
    {
      label: 'Button 2',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/park-1.png`,
  input: {
    text: 'This is a placeholder for text input',
  },
  // This is the base URL for all requests that will be sent from this page
  // Clicking button 1 vs button 2 will simply send FrameActionIndex 1 or 2 
  // to this API, and you'll have to handle that.
  // See app/api/frame/route.ts for how to do that.
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});


// This is the next JS OG tag metadta
// Solarplex frame metadata is just another OG Tag
// The convenience functions above make it easy to create them
//  programmaticallly
export const metadata: Metadata = {
  title: 'Solarplex frame demo',
  description: 'LFG Solarplex Frames Demo!',
  openGraph: {
    title: 'Solarplex frame demo',
    description: 'Solarplex frame demo app available at github.com/usedispatch/solarplex-frame-demo',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

console.log('netadata', metadata)
export default function Page() {
  return (
    <>
      <h1>Welcome to the Solarplex Frames 1 demo</h1>
    </>
  );
}

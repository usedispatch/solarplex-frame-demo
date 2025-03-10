export interface FrameData {
  buttonIndex: number;
  inputText: string;
  url: string;
  // TBD
  // atproto post ID
  // interactor stats (liked, RTd, followed)
  // TBD
}

// TODO(viksit): make this more like FC frames by
// - support untrusted data
// - supported signed trusted data as bytes
/**
 * When Solarplex makes a request to the external link 
 * requests follow this format
 */
export interface FrameRequest {
  untrustedData: FrameData;
  trustedData: {
    messageBytes: string;
  };

}

export type FrameButtonMetadata = {
  label: string;
  action?: 'post' | 'post_redirect';
};

export type FrameInputMetadata = {
  text: string;
};

/**
 * Frame Request
 *
 */
export type FrameMetadataType = {
  buttons?: [FrameButtonMetadata, ...FrameButtonMetadata[]];
  image: string;
  input?: FrameInputMetadata;
  post_url?: string;
  refresh_period?: number;
};



// TODO(viksit): add frame parsing / validation code here
// We want to ensure that only properly formatted frame requests come in
// In the future, we want to use signed/trusted messages for wallet related
// actions.
// -- 
export interface FrameValidationData {
    button: number; // Number of the button clicked
    input: string; // Text input from the viewer typing in the frame
    // interactor: {
    //   interactor ID
    //   interactor wallet
    // };
    // following: boolean; // Indicates if the viewer clicking the frame follows poster of frame
    // liked: boolean; // Indicates if the viewer clicking the frame liked the frame post
    // reposted: boolean; // Indicates if the viewer clicking the frame reposted frame post
    valid: boolean; // Indicates if the frame is valid
  }
  
  export type FrameValidationResponse =
    | { isValid: true; message: FrameValidationData }
    | { isValid: false; message: undefined };

// Unported code from farcaster spec
// export function convertToFrame(json: any) {
  //   return {
  //     fid: json.fid,
  //     url: json.frameActionBody?.url.toString(),
  //     messageHash: json.messageHash,
  //     timestamp: json.timestamp,
  //     network: json.network,
  //     buttonIndex: json.frameActionBody?.buttonIndex,
  //     castId: {
  //       fid: json.frameActionBody?.castId?.fid,
  //       hash: json.frameActionBody?.castId?.hash,
  //     },
  //   };
  // }
  
import { FrameRequest, FrameValidationResponse } from './types';

type FrameMessageOptions =
  | {
      neynarApiKey?: string;
      castReactionContext?: boolean;
      followContext?: boolean;
    }
  | undefined;

/**
 * Given a frame message, decode and validate it.
 *
 * If message is valid, return the message. Otherwise undefined.
 *
 * @param body The JSON received by server on frame callback
 */
async function getFrameMessage(
  body: FrameRequest,
  messageOptions?: FrameMessageOptions,
) 
// Promise<FrameValidationResponse> 
{
  // const response 
  // Validate the message
  // const response = await neynarFrameValidation(
  //   body?.trustedData?.messageBytes,
  //   messageOptions?.neynarApiKey || NEYNAR_DEFAULT_API_KEY,
  //   messageOptions?.castReactionContext || true,
  //   messageOptions?.followContext || true,
  // );
  // if (response?.valid) {
  //   return {
  //     isValid: true,
  //     message: response,
  //   };
  // } else {
  //   // Security best practice, don't return anything if we can't validate the frame.
  //   return {
  //     isValid: false,
  //     message: undefined,
  //   };
  // }
  // TODO(viksit): we need to do frame validation here at some point
  return {
    isValid: true,
    message: response,
      };
  
}

export { getFrameMessage };
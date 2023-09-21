export interface IRpcRequestPayload {
  module: string;
  handler: string;
  params: Record<string, unknown>;
}

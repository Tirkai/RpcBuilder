type Handler = () => Promise<unknown>;

export class ControllerHandler {
  name: string;
  handler: Handler;
  constructor(name: string, handler: Handler) {
    this.name = name;
    this.handler = handler;
  }
}

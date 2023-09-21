import { Handler } from "./Handler.ts";

export class ModuleHandler {
  public name: string;
  public fn: Handler;
  constructor(name: string, fn: Handler) {
    this.name = name;
    this.fn = fn;
  }
}

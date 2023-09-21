import { Handler } from "./Handler.ts";
import { ModuleHandler } from "./ModuleHandler.ts";

type RegisterHandler = (moduleHandler: ModuleHandler) => void;

export class Module {
  handlers: Map<string, Handler> = new Map();

  constructor() {
    this.startUp();
  }

  public startUp(){}

  public registerHandler: RegisterHandler = (moduleHandler) => {
    this.handlers.set(moduleHandler.name, moduleHandler.fn);
  };
}

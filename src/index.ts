import { Application } from "./core/Application.ts";
import { bannerService } from "./BannerService.ts";
import { BaseHandlerType } from "./core/BaseHandlerType.ts";
import { Module } from "./core/Module.ts";
import { ModuleHandler } from "./core/ModuleHandler.ts";
import { globalConfig } from "./globalConfig.ts";

class BannerModule extends Module {
  constructor() {
    super();
    this.registerHandler(
      new ModuleHandler(BaseHandlerType.GetList, bannerService.getList)
    );
    this.registerHandler(
      new ModuleHandler(BaseHandlerType.GetById, bannerService.getById)
    );
  }
}

class App extends Application {
  constructor() {
    super();
    this.registerModule("Banner", new BannerModule());
  }
}

await globalConfig.load();

const { serverPort } = globalConfig;

const myApp = new App();

myApp.run({ port: serverPort });

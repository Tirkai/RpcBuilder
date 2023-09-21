import fastify, { FastifyInstance, FastifyRequest } from "fastify";
import chalk from "chalk";
import { Module } from "./Module.ts";
import { IRpcRequestPayload } from "./IRpcRequestPayload.ts";
import { RpcResponseError } from "./RpcResponseError.ts";
import { ErrorMessageFactory } from "./ErrorMessageFactory.ts";
import { IApplicationRunConfig } from "./IApplicationRunConfig.ts";
import { globalConfig } from "../globalConfig.ts";

export class Application {
  public instance: FastifyInstance;

  public modules: Map<string, Module> = new Map();

  constructor() {
    this.instance = fastify();
  }

  public registerModule(name: string, module: Module) {
    this.modules.set(name, module);
  }

  public run(config: IApplicationRunConfig) {
    this.instance.get("/", () => {
      return "Server is running";
    });

    this.instance.post<{ Body: IRpcRequestPayload }>(
      globalConfig.rpcApiEndpointPath,
      (request: FastifyRequest) => {
        const { module, handler, params } = request.body as IRpcRequestPayload;

        const findedModule = this.modules.get(module);

        if (!findedModule) {
          return new RpcResponseError(
            ErrorMessageFactory.moduleNotFound({ name: module })
          );
        }

        const findedHander = findedModule.handlers.get(handler);

        if (!findedHander) {
          return new RpcResponseError(
            ErrorMessageFactory.handlerNotFound({ name: handler })
          );
        }

        const result = findedHander(params);

        console.log(
          `Invoke ${chalk.yellow(
            module + "." + handler
          )} with params ${chalk.cyanBright(JSON.stringify(params ?? {}))}`
        );

        return result;
      }
    );

    const port = config.port;

    this.instance.listen({ port }, () => {
      console.log(chalk.yellow(`Server started on ${config.port} port`));
    });
  }
}

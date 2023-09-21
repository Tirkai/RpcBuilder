import { load as loadEnv } from "dotenv";
import { EnvParser } from "./core/EnvParser.ts";

class GlobalConfig {
  public rpcApiEndpointPath = "/rpc/api";
  public serverPort = 8080;

  public load = async () => {
    const { RPC_API_ENDPOINT_PATH, SERVER_PORT } = await loadEnv();

    this.rpcApiEndpointPath = EnvParser.getString({
      value: RPC_API_ENDPOINT_PATH,
      default: this.rpcApiEndpointPath,
    });

    this.serverPort = EnvParser.getInteger({
      value: SERVER_PORT,
      default: this.serverPort,
    });
  };
}

export const globalConfig = new GlobalConfig();

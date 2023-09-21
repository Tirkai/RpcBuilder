import { db } from "./db.ts";
import { ErrorMessageFactory } from "./core/ErrorMessageFactory.ts";
import { RpcResponseError } from "./core/RpcResponseError.ts";
import { Service } from "./core/Service.ts";

type GetListParams = { id: string };

class BannerService extends Service {
  public getList = async () => {
    const { items } = await db();
    return { items };
  };

  public getById = async (params: Record<string, unknown>) => {
    const { id } = params as GetListParams;
    const { items } = await db();

    const findedItem = items.find((x) => x.id === id);

    if (!findedItem) {
      return new RpcResponseError(ErrorMessageFactory.elementNotFound({ id }));
    }

    return findedItem;
  };
}

export const bannerService = new BannerService();

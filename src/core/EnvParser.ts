interface IParserOptions<T, K> {
  value?: T;
  default: K;
}

export class EnvParser {
  public static getInteger = (
    options: IParserOptions<number | string, number>
  ) => {
    if (!options.value) {
      return options.default;
    }

    if (typeof options.value === "number") {
      return options.value;
    }

    return parseInt(options.value);
  };

  public static getString = (options: IParserOptions<string, string>) => {
    if (!options.value) {
      return options.default;
    }

    return options.value;
  };
}

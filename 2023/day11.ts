type SantaListProtector<T> = T extends Record<string, unknown> | unknown[]
  ? {
      readonly [key in keyof T]: T[key] extends
        | Record<string, unknown>
        | unknown[]
        ? SantaListProtector<T[key]>
        : T[key];
    }
  : T;

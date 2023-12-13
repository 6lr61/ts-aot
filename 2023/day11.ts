type SantaListProtector<T> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown> | unknown[]
    ? SantaListProtector<T[key]>
    : T[key];
} & unknown;

type MakeReverseArray<
  S extends string,
  A extends string[] = []
> = S extends `${infer H}${infer T}` ? [...MakeReverseArray<T>, H] : A;

type MakeString<A extends string[]> = A extends [infer H, ...infer T]
  ? T extends string[]
    ? `${H & string}${MakeString<T>}`
    : ""
  : "";

type Reverse<S extends string> = MakeString<MakeReverseArray<S>>;

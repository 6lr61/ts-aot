type Thing<
  I extends string,
  A extends number[] = [],
  B extends number[] = []
> = I extends `${infer N extends number}`
  ? N extends B["length"]
    ? ["🛹", "🚲", "🛴", "🏄"][A["length"]]
    : Thing<I, [...A, 0]["length"] extends 4 ? [] : [...A, 0], [...B, 0]>
  : never;

type Repeat<
  I extends string,
  N,
  A extends unknown[] = []
> = N extends A["length"] ? A : Repeat<I, N, [Thing<I>, ...A]>;

type Flatten<L, A extends unknown[] = []> = L extends [
  infer B extends unknown[],
  ...infer E
]
  ? Flatten<E, [...A, ...B]>
  : A;

type Rebuild<L extends unknown[]> = Flatten<{
  [K in keyof L]: Repeat<`${K}`, L[K]>;
}>;

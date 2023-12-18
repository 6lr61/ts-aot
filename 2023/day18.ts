type Count<L, I, A extends string[] = []> = L extends [
  infer H extends string,
  ...infer T
]
  ? H extends I
    ? Count<T, I, [...A, H]>
    : Count<T, I, A>
  : A["length"];

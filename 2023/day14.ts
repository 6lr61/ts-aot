type DecipherNaughtyList<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer H}/${infer T}`
  ? DecipherNaughtyList<T, [H, ...Acc]>
  : [S, ...Acc][number];

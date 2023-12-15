type BoxToys<
  Toy extends string,
  N extends number,
  A extends string[] = []
> = N extends A["length"] ? A : BoxToys<Toy, N, [Toy, ...A]>;

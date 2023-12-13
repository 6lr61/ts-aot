type Reverse<
  S extends string,
  A extends string = ""
> = S extends `${infer H}${infer T}` ? Reverse<T, `${H}${A}`> : A;

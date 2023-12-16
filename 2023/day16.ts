// FindSanta from Day 12, but with extends type guards
type FindColumn<C extends string[], A extends string[] = []> = C extends [
  infer H extends string,
  ...infer T extends string[]
]
  ? H extends "🎅🏼"
    ? A["length"]
    : FindColumn<T, [...A, H]>
  : never;

type FindSanta<F extends string[][], A extends string[] = []> = F extends [
  infer Row extends string[],
  ...infer Rest extends string[][]
]
  ? FindColumn<Row> extends never
    ? FindSanta<Rest, ["", ...A]>
    : [A["length"], FindColumn<Row>]
  : never;

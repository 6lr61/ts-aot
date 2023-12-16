// FindSanta from Day 12, except it evaluates to a false type instead of never (never extends number, for some reason?)
type FindColumn<C extends unknown[], A extends unknown[] = []> = C extends [
  infer H,
  ...infer T
]
  ? H extends "🎅🏼"
    ? A["length"]
    : FindColumn<T, [...A, H]>
  : false;

type FindSanta<F extends unknown[][], A extends unknown[] = []> = F extends [
  infer Row,
  ...infer Rest
]
  ? Row extends unknown[]
    ? FindColumn<Row> extends number
      ? [A["length"], FindColumn<Row>]
      : Rest extends unknown[][]
      ? FindSanta<Rest, [0, ...A]>
      : never
    : never
  : never;

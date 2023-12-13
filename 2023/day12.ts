type FindSanta<F extends unknown[], A extends unknown[] = []> = F extends [
  infer H,
  ...infer T
]
  ? H extends "🎅🏼"
    ? A["length"]
    : FindSanta<T, [...A, H]>
  : never;

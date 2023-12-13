type FindSanta<
  T extends ("🎅🏼" | "🎄")[],
  A extends unknown[] = []
> = T[A["length"]] extends "🎅🏼"
  ? A["length"]
  : T["length"] extends A["length"]
  ? never
  : FindSanta<T, [...A, 0]>;

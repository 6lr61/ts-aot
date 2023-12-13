// Solution to starting from any day inspired by: https://github.com/TkDodo/aot-2023/blob/main/13.ts

type Counter<
  Stop extends number,
  Acc extends number[] = [1]
> = Stop extends Acc["length"]
  ? Acc[number]
  : Counter<Stop, [...Acc, [...Acc, 0]["length"]]>;

type DayCounter<B extends number, E extends number> =
  | B
  | Exclude<Counter<E>, Counter<B>>;

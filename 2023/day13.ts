type DayCounter<
  Start extends number,
  Stop extends number,
  Acc extends number[] = [1]
> = Stop extends Acc["length"]
  ? Acc[number]
  : DayCounter<Start, Stop, [...Acc, [...Acc, 0]["length"]]>;

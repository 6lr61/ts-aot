interface Letters {
  A: ["█▀█ ", "█▀█ ", "▀ ▀ "];
  B: ["█▀▄ ", "█▀▄ ", "▀▀  "];
  C: ["█▀▀ ", "█ ░░", "▀▀▀ "];
  E: ["█▀▀ ", "█▀▀ ", "▀▀▀ "];
  H: ["█ █ ", "█▀█ ", "▀ ▀ "];
  I: ["█ ", "█ ", "▀ "];
  M: ["█▄░▄█ ", "█ ▀ █ ", "▀ ░░▀ "];
  N: ["█▄░█ ", "█ ▀█ ", "▀ ░▀ "];
  P: ["█▀█ ", "█▀▀ ", "▀ ░░"];
  R: ["█▀█ ", "██▀ ", "▀ ▀ "];
  S: ["█▀▀ ", "▀▀█ ", "▀▀▀ "];
  T: ["▀█▀ ", "░█ ░", "░▀ ░"];
  Y: ["█ █ ", "▀█▀ ", "░▀ ░"];
  W: ["█ ░░█ ", "█▄▀▄█ ", "▀ ░ ▀ "];
  " ": ["░", "░", "░"];
  ":": ["#", "░", "#"];
  "*": ["░", "#", "░"];
}

type SplitOnNewline<
  S extends string,
  A extends string[] = []
> = S extends `${infer F}\n${infer R}`
  ? SplitOnNewline<R, [...A, F]>
  : [...A, S];

type StringToArray<
  S extends string,
  A extends string[] = []
> = Uppercase<S> extends `${infer F}${infer R}`
  ? StringToArray<R, [...A, F]>
  : A;

type RenderLine<
  A extends string[],
  N extends number,
  O extends string = ""
> = A extends [infer H extends keyof Letters, ...infer T extends string[]]
  ? RenderLine<T, N, `${O}${Letters[H][N]}`>
  : O;

type LineToASCII<
  L extends string[],
  A extends string[] = [],
  C extends number[] = []
> = C["length"] extends 3
  ? A
  : LineToASCII<L, [...A, RenderLine<L, C["length"]>], [...C, 0]>;

type AssembleArt<L, A extends unknown[] = []> = L extends [
  infer H extends string,
  ...infer T
]
  ? AssembleArt<T, [...A, ...LineToASCII<StringToArray<H>>]>
  : A;

type ToAsciiArt<S extends string> = AssembleArt<SplitOnNewline<S>>;

type StreetSuffixTester<
  Street extends string,
  Suffix extends string
> = Street extends `${string}${Suffix}` ? true : false;

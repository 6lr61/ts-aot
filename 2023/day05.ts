type SantasList<
  Good extends readonly unknown[],
  Bad extends readonly unknown[]
> = [...Good, ...Bad];

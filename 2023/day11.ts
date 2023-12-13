type SantaListProtector<T> = T extends Function
  ? T
  : { readonly [key in keyof T]: SantaListProtector<T[key]> };

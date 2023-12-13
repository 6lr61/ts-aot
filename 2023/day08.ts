type RemoveNaughtyChildren<T> = {
  [key in keyof T as key extends `naughty_${string}` ? never : key]: T[key];
};

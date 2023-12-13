type AppendGood<T> = { [key in keyof T as `good_${string & key}`]: T[key] };

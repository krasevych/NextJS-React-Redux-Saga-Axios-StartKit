export interface curry1<T1, R> {
  (): curry1<T1, R>;
  (t1: T1): R;
}

export interface curry2<T1, T2, R> {
  (): curry2<T1, T2, R>;
  (t1: T1): curry1<T2, R>;
  (t1: T1, t2: T2): R;
}

export interface curry3<T1, T2, T3, R> {
  (): curry3<T1, T2, T3, R>;
  (t1: T1): curry2<T2, T3, R>;
  (t1: T1, t2: T2): curry1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
}

export interface curry4<T1, T2, T3, T4, R> {
  (): curry4<T1, T2, T3, T4, R>;
  (t1: T1): curry3<T2, T3, T4, R>;
  (t1: T1, t2: T2): curry2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): curry1<T4, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

export type Curry = {
  <T1, R>(func: (t1: T1) => R): curry1<T1, R>;
  <T1, T2, R>(func: (t1: T1, t2: T2) => R): curry2<T1, T2, R>;
  <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R): curry3<T1, T2, T3, R>;
  <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R): curry4<
    T1,
    T2,
    T3,
    T4,
    R
  >;
  (func: (...args: any[]) => any): (...args: any[]) => any;
};

const curry: Curry = (func: Function) => {
  let savedFunc = func;
  return (...args: any[]) =>
    savedFunc.length <= 1
      ? savedFunc(...args)
      : (savedFunc = savedFunc.bind(savedFunc, ...args));
};

export default curry;

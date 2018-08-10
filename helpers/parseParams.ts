export const toUrlParams = <T extends { [K in string]: T[K] }>(obj: T) =>
  Object.keys(obj).reduce((acc, k) => {
    `${k}=${obj[k]}`;
    return obj[k] ? `${acc}&${k}=${encodeURIComponent(obj[k])}` : acc;
  }, '');

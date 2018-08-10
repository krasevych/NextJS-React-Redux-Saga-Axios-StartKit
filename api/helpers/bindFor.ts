import { AxiosPromise } from 'axios';

import { Request } from '../types';

type HOFWithRequest = (request: Request) => (...args: any[]) => AxiosPromise;
type ObjectWithRequestHOF<T> = { [key in keyof T]: HOFWithRequest };
type BindedObject<
  T extends {
    [key: string]: HOFWithRequest;
  }
> = { [K in keyof T]: ReturnType<T[K]> };

const bindFor = (request: Request) => <T extends ObjectWithRequestHOF<T>>(
  obj: T
): BindedObject<T> =>
  Object.keys(obj).reduce<any>(
    (result, key: keyof T) => ({
      ...result,
      [key]: (data: any) => obj[key](request)(data)
    }),
    {} as BindedObject<T>
  );

export default bindFor;

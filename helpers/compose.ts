import composeLodash from 'lodash/fp/compose';
import { ComponentType } from 'react';

const compose = <E = {}>(...arg: any[]) => <P>(
  ComponentWrapper: ComponentType<P>
) => {
  type ExtractedProps = Pick<P, Exclude<keyof P, keyof E>>;
  return (composeLodash as any)(...arg)(ComponentWrapper) as ComponentType<
    ExtractedProps
  >;
};

export default compose;

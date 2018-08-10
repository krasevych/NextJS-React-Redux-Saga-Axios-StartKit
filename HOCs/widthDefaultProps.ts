import { ComponentType } from 'react';

const withDefaultProps = <DP>(defaultProps: DP) => <P>(
  WrappedComponent: ComponentType<P>
) => {
  type PropsExcludingDefaults = Pick<P, Exclude<keyof P, keyof DP>>;
  type RecomposeProps = Partial<DP> & PropsExcludingDefaults;

  WrappedComponent.defaultProps = defaultProps;

  return (WrappedComponent as ComponentType<P>) as ComponentType<
    RecomposeProps
  >;
};

export default withDefaultProps;

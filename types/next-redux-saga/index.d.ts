declare function nextReduxSaga<TOwnProps = any, TMergedProps = any>(
  Component: Component<TOwnProps & TMergedProps>
): Component;

export = nextReduxSaga;

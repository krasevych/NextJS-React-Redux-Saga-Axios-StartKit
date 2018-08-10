/* ts:disable */
type Noop = (...args: any[]) => void;
const noop: Noop = () => {
  // no operation performed
};

export default noop;

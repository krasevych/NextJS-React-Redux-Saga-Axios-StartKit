export type ListenerObject = {
  [x in keyof HTMLElementEventMap]?: EventListener
};
export type ListenerCallback = (
  eventType: keyof HTMLElementEventMap,
  callback?: EventListener,
  options?: boolean | AddEventListenerOptions
) => void;

const createEventListenersFromObject = (
  obj: ListenerObject,
  fn: ListenerCallback,
  options?: boolean | AddEventListenerOptions
) => {
  Object.keys(obj).forEach((key: keyof HTMLElementEventMap) =>
    fn(key, obj[key], options)
  );
};

const createEventListeners = (
  el: HTMLElement,
  obj: ListenerObject,
  options?: boolean | AddEventListenerOptions
) => {
  const setListeners = () =>
    createEventListenersFromObject(obj, el.addEventListener.bind(el), options);
  const removeListeners = () =>
    createEventListenersFromObject(
      obj,
      el.removeEventListener.bind(el),
      options
    );
  return [setListeners, removeListeners];
};

export default createEventListeners;

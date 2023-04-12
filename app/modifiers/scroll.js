import { modifier } from 'ember-modifier';

export default modifier(function scroll(element, [eventName, listener]) {
  element.addEventListener(eventName, listener);
  return () => element.removeEventListener(eventName, listener);
});

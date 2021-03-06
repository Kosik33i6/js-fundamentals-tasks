import { tags } from './setting';

export const isDOMElement = function(element) {
  return (
    typeof HTMLElement === 'object' ?
    element instanceof HTMLElement :
    element && typeof element === 'object' && element !== null && element.nodeType === 1 && typeof element.nodeName === 'string'
  );
};

export const isListElementHaveCorrectTagName = function(element) {
  return element.tagName === tags.li;
};

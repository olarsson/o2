export const find = function (selector) {
  let logic = function (el) {
    return el.querySelectorAll(selector);
  };
  if (this.element.length === undefined) {
    //Only 1 item
    return logic(this.element)
  } else {
    //A Nodelist with multiple items
    return [...this.element].map(item => logic(item));
  }
};
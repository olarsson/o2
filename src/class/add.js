export const addClass = function (className) {
  let logic = function (el) {
    el.classList ? el.classList.add(className) : el.className += ' ' + className;
  };
  if (this.element.length === undefined) {
    //Only 1 item
    logic(this.element)
  } else {
    //A Nodelist with multiple items
    Array.from(this.element).map(item => logic(item));
  }
  return this.element;
}
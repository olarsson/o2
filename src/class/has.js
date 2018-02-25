export const hasClass = function (cls) {
  let logic = function (el) {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  };
  if (this.element.length === undefined) {
    //Only 1 item
    return logic(this.element)
  } else {
    //A Nodelist with multiple items
    return [...this.element].map(item => logic(item));
  }
};
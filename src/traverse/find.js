export const find = function (selector) {
  let logic = function (el) {
    return el.querySelectorAll(selector);
  };
  if (this.length === undefined) {
    //Only 1 item
    return logic(this)
  } else {
    //A Nodelist with multiple items
    return [...this].map(item => logic(item));
  }
};

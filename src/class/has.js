export const hasClass = function (cls) {
  let logic = function (el) {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  };
  if (this.length === undefined) {
    //Only 1 item
    return logic(this)
  } else {
    //A Nodelist with multiple items
    return [...this].map(item => logic(item));
  }
};
export const hasClass = function (cls) {
  let logic = function (el) {
    return new RegExp("(^| )"+cls+"( |$)").test(el.className);
  };
  if (this.length === undefined) {
    //Only 1 item
    return logic(this)
  } else {
    //A Nodelist with multiple items
    return [...this].map(item => logic(item));
  }
};

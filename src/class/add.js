/* export const addClass = function (className) {
  let logic = function (el) {
    el.classList ? el.classList.add(className) : el.className += ' ' + className;
  };
  if (this.length === undefined) {
    //Only 1 item
    logic(this)
  } else {
    //A Nodelist with multiple items
    Array.from(this).map(item => logic(item));
  }
  return this;
}
 */
export const addClass = function (classes) {
  let logic = function (el) {
    classes.map(cls => {
      el.classList ? el.classList.add(cls) : el.className += ' ' + cls;
    });
  };
  classes = classes.split(' ');
  if (this.length === undefined) {
    //Only 1 item
    logic(this)
  } else {
    //A Nodelist with multiple items
    Array.from(this).map(item => logic(item));
  }
  return this;
};
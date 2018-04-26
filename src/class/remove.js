export const removeClass = function (classes) {
  let logic = function (el) {
    classes.map(cls => {
      el._hasClass(cls) && el.classList.remove(cls)
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

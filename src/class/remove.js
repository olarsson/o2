export const removeClass = function (classes) {
  let logic = function (el) {
    classes.map(cls => {
      el.o.hasClass(cls) && el.classList.remove(cls)
    });
  };
  classes = classes.split(' ');
  if (this.element.length === undefined) {
    //Only 1 item
    logic(this.element)
  } else {
    //A Nodelist with multiple items
    Array.from(this.element).map(item => logic(item));
  }
  return this.element;
};
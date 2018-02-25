export const getParents = function (selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Setup parents array
  var parents = [];

  // Get matching parent elements
  for (; this.element && this.element !== document; this.element = this.element.parentNode) {

    // Add matching parents to array
    if (selector) {
      if (this.element.matches(selector)) {
        parents.push(this.element);
      }
    } else {
      parents.push(this.element);
    }

  }

  return parents;

};
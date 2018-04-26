export const isElementPartiallyInViewport = function(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  var rTop = rect.top;
  if (rTop >= 0) rTop = -1;

  var bottomDiff = window.innerHeight - window.innerHeight / 1.5;
  return (
    rTop > +-Math.floor(rect.height / 1.5) &&
    rect.left >= 0 &&
    rect.bottom - bottomDiff <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

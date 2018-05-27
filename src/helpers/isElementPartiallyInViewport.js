export const isElementPartiallyInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    rectTop = rect.top,
    //bottomDiff = window.innerHeight,
    //windowHeight = (window.innerHeight || document.documentElement.clientHeight),
    visibleBottom,
    visibleTop;

  if (rectTop >= 0) rectTop = 0;

  visibleBottom = Math.floor(100 - ((rectTop / +-(rect.height / 1)) * 100))
  //visibleTop =    Math.floor(100 - ((rect.bottom - bottomDiff) / rect.height) * 100);
  visibleTop =    Math.floor(100 - ((rect.bottom - (window.innerHeight || document.documentElement.clientHeight)) / rect.height) * 100);

/*  if (visibleTop > 100)  visibleTop = 100;
  if (visibleBottom < 0) visibleBottom = 0;
  if (visibleTop < 0)    visibleTop = 0;*/

  console.log({
    visible: !(visibleBottom < percentVisible || visibleTop < percentVisible),
    visibleBottom: visibleBottom,
    visibleTop: visibleTop
  });

  return !(visibleBottom < percentVisible || visibleTop < percentVisible)

};

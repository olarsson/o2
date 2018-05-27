(function() {

  console.clear();

  var html = document.querySelector('body main').outerHTML;

  var resetDOM = function() {
    document.querySelector('body').innerHTML = html;
  };

  (function() {
    document.addEventListener('scroll', o._debounce(function() {

      var elem = o('.floater1')[0];

      if (o._isElementXPercentInViewport(elem, 30)) {
        elem.classList.add('active')
      } else {
        elem.classList.remove('active')
      }

    }, 10))
  })();

  (function() {
    o('body')._addClass('oneA oneB oneC');
    console.log('Add class - single dom elem - success: ', $('body').hasClass('oneA'));
    resetDOM();
  })();

  (function() {
    var success = true;
    o('.domelem')._addClass('multiA multiB');
    $('.domelem').map(function(idx, elem) {
      if (elem.className !== "domelem multiA multiB") success = false;
    });
    console.log('Add class - multiple dom elements - success: ', success);
    resetDOM();
  })();

  (function() {
    o('body')._addClass('oneA oneB oneC');
    o('body')._removeClass('oneA oneC');
    console.log('Remove class success: ', $('body')[0].className === "oneB");
    resetDOM();
  })();

  (function() {
    o('body')._addClass('oneB');
    console.log('Has class success: ', (o('body')[0]._hasClass('oneB') === true && $('body').hasClass('oneB') === true));
    resetDOM();
  })();

  (function() {
    var first = Array.from(o('body')[0]._find('.a')),
       second = Array.from($('body').find('.a')),
        equal = first.length == second.length
         && first.every(function(element, index) {
           element === second[index]}
         );
    console.log('Find success: ', equal);
    resetDOM();
  })();

})();

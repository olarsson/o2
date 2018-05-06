(function() {

  console.clear();

  var html = document.querySelector('body main').outerHTML;

  var resetDOM = () => {
    document.querySelector('body').innerHTML = html;
  };

  (() => {
    o('body')._addClass('oneA oneB oneC');
    console.log('Add class - single dom elem - success: ', $('body').hasClass('oneA'));
    resetDOM();
  })();

  (() => {
    let success = true;
    o('.domelem')._addClass('multiA multiB');
    $('.domelem').map((idx, elem) => {
      if (elem.className !== "domelem multiA multiB") success = false;
    });
    console.log('Add class - multiple dom elements - success: ', success);
    resetDOM();
  })();

  (() => {
    o('body')._addClass('oneA oneB oneC');
    o('body')._removeClass('oneA oneC');
    console.log('Remove class success: ', $('body')[0].className === "oneB");
    resetDOM();
  })();

  (() => {
    o('body')._addClass('oneB');
    console.log('Has class success: ', (o('body')[0]._hasClass('oneB') === true && $('body').hasClass('oneB') === true));
    resetDOM();
  })();

  (() => {
    let first = [...o('body')[0]._find('.a')],
       second = [...$('body').find('.a')],
        equal = first.length == second.length
         && first.every((element, index)=> element === second[index] );
    console.log('Find success: ', equal);
    resetDOM();
  })();

})();

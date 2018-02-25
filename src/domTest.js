(function() {

  console.clear();

  var html = document.querySelector('body').innerHTML;

  var resetDOM = () => {
    document.querySelector('body').parentElement.innerHTML = html;
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
    console.log('Has class success: ', (o('body')._hasClass('oneB') === true && $('body').hasClass('oneB') === true));
    resetDOM();
  })();


  
  //console.log('Get closest: ', el('.b').o.getClosest('.test') )
  //console.log( el('.a').o.getParents('.test') )
  //console.log(addClass);

   //o2('body').o.addClass('oneA').o.addClass('oneB')
  //el('.domelem').o.addClass('multiA').o.addClass('multiB')
/*   el('.domelem').o.addClass('multiA');
  el('.domelem')[2].o.addClass('multiA-target');

  el('.domelem').o.removeClass('multiA test aa');

  console.log(el('body').o.hasClass('oneA'))
  console.log(el('.domelem').o.hasClass('multiA'))

  console.log( el('.test').o.find('div') )
  console.log( el('body').o.find('.a,.b') ) */
  
})();
'use strict';

import {addClass} from './src/class/add.js';
import {removeClass} from './src/class/remove.js';
import {hasClass} from './src/class/has.js';

import {getClosest} from './src/traverse/getClosest.js';
import {getParents} from './src/traverse/getParents.js';
import {find} from './src/traverse/find.js';

window.el = (selector) => {
  let elems = document.querySelectorAll(selector);
  return elems.length > 1 ? elems : elems[0];
};

window.o = {
  test: () => {
    return true;
  }
};

var o = function(element) {
  this.element = element;
};

o.prototype = {

  addClass:     addClass,
  removeClass:  removeClass,
  hasClass:     hasClass,

  // Get the closest matching element up the DOM tree.
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  getClosest:   getClosest,

  // Get all of an element's parent elements up the DOM tree
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  getParents:   getParents,

  find: find

};


[NodeList, Element].map(types => {
  Object.defineProperty(types.prototype, "o", {
    get: function () {
      Object.defineProperty(this, "o", {
        value: new o(this)
      });		
      return this.o;
    },
    configurable: true,
    writeable: false
  })
});


(function() {

  console.clear();

  //console.log('Get closest: ', el('.b').o.getClosest('.test') )
  //console.log( el('.a').o.getParents('.test') )
  //console.log(addClass);

   el('body').o.addClass('oneA').o.addClass('oneB')
  //el('.domelem').o.addClass('multiA').o.addClass('multiB')
/*   el('.domelem').o.addClass('multiA');
  el('.domelem')[2].o.addClass('multiA-target');

  el('.domelem').o.removeClass('multiA test aa');

  console.log(el('body').o.hasClass('oneA'))
  console.log(el('.domelem').o.hasClass('multiA'))

  console.log( el('.test').o.find('div') )
  console.log( el('body').o.find('.a,.b') ) */
  
})();
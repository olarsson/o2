"use strict";

window.$ = require('jquery') //For testing, ironically..

import {addClass}     from './class/add.js';
import {removeClass}  from './class/remove.js';
import {hasClass}     from './class/has.js';

import {getClosest}   from './traverse/getClosest.js';
import {getParents}   from './traverse/getParents.js';
import {find}         from './traverse/find.js';

import {debounce}     from './helpers/debounce.js';
import {hasTouch}     from './helpers/hasTouch.js';
//import {isElemPinWP}   from './helpers/isElementPartiallyInViewport.js';

import { log } from 'util';

//Create the base "o" object that primarily functions as an element selector
window.o = (selector) => {
  let type = selector.substr(0,1);
  if (type === '#') {
    return document.getElementById(selector.substr(1, selector.length));
  } else {
    return document.querySelectorAll(selector);
  }
};

//Extend the "o" object with custom helpers
window.o._debounce = debounce;
//window.o._isElementPartiallyInViewport = isElemPinWP;

//Getter constructions of the helper functions
//Object.defineProperty(o, '_hasTouch', { get: hasTouch });

//Extend the native objects with custom functions
[NodeList, Element].map(types => {

  types.prototype._addClass = addClass;       //elem._addClass([classes STRING])
  types.prototype._removeClass = removeClass; //elem._removeClass([classes STRING])
  types.prototype._hasClass = hasClass;       //elem._hasClass([class STRING])

  types.prototype._find = find;               //elem._find([selector STRING])

  // Get the closest matching element up the DOM tree.
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  types.prototype._getClosest = getClosest;

  // Get all of an element's parent elements up the DOM tree
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  types.prototype._getParents = getParents;

});

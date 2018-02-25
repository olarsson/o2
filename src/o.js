"use strict";

window.$ = require('jquery') //For testing, ironically..

import {addClass}     from './class/add.js';
import {removeClass}  from './class/remove.js';
import {hasClass}     from './class/has.js';

import {getClosest}   from './traverse/getClosest.js';
import {getParents}   from './traverse/getParents.js';
import {find}         from './traverse/find.js';
import { log } from 'util';

window.o = (selector) => {
  let elems = document.querySelectorAll(selector);
  return elems.length > 1 ? elems : elems[0];
};


/* window.o = {
  test: () => {
    return true;
  }
}; */

[NodeList, Element].map(types => {
  types.prototype._addClass = addClass;
  types.prototype._removeClass = removeClass;
  types.prototype._hasClass = hasClass;

    // Get the closest matching element up the DOM tree.
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
  types.prototype._getClosest = getClosest;

  // Get all of an element's parent elements up the DOM tree
  // source: https://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/  
  types.prototype._getParents = getParents;
  types.prototype._find = find;
});
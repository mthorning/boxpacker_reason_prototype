'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function s(prim) {
  return prim;
}

function mapElements(list, callback) {
  return $$Array.of_list(Belt_List.map(list, callback));
}

exports.s = s;
exports.mapElements = mapElements;
/* No side effect */

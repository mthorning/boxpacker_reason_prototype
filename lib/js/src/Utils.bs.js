'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Random = require("bs-platform/lib/js/random.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function s(prim) {
  return prim;
}

function mapElements(list, callback) {
  return $$Array.of_list(Belt_List.map(list, callback));
}

function uuid(name) {
  return name + ("-" + String(Random.$$int(Date.now() | 0)));
}

var DeleteIcon = { };

exports.s = s;
exports.mapElements = mapElements;
exports.uuid = uuid;
exports.DeleteIcon = DeleteIcon;
/* No side effect */

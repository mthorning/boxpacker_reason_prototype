'use strict';

var V4 = require("uuid/v4");

function uuid(prim) {
  return V4();
}

exports.uuid = uuid;
/* uuid/v4 Not a pure module */

'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Utils$Boxpacker = require("./Utils.bs.js");

function reducer(state, action) {
  var name = action[0];
  return {
          boxes: Pervasives.$at(state.boxes, /* :: */[
                {
                  id: Utils$Boxpacker.uuid(name),
                  name: name
                },
                /* [] */0
              ]),
          items: state.items
        };
}

exports.reducer = reducer;
/* No side effect */

'use strict';

var Nanoid = require("nanoid");

function reducer(state, action) {
  var newBox_id = Nanoid.nanoid();
  var newBox_name = action[0];
  var newBox = {
    id: newBox_id,
    name: newBox_name
  };
  return {
          boxes: /* :: */[
            newBox,
            state.boxes
          ],
          items: state.items
        };
}

exports.reducer = reducer;
/* nanoid Not a pure module */

'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Utils$Boxpacker = require("./Utils.bs.js");

function reducer(state, action) {
  switch (action.tag | 0) {
    case /* AddBox */0 :
        var name = action[0];
        return {
                boxes: Pervasives.$at(state.boxes, /* :: */[
                      {
                        id: Utils$Boxpacker.uuid(name),
                        name: name
                      },
                      /* [] */0
                    ]),
                selectedBox: state.selectedBox,
                items: state.items
              };
    case /* ToggleBoxSelection */1 :
        var id = action[0];
        var match = state.selectedBox;
        if (match !== undefined) {
          return {
                  boxes: state.boxes,
                  selectedBox: id === match ? undefined : id,
                  items: state.items
                };
        } else {
          return {
                  boxes: state.boxes,
                  selectedBox: id,
                  items: state.items
                };
        }
    case /* AddItem */2 :
        var name$1 = action[0];
        var match$1 = state.selectedBox;
        if (match$1 !== undefined) {
          var newItem_id = Utils$Boxpacker.uuid(name$1);
          var newItem = {
            id: newItem_id,
            box: match$1,
            name: name$1
          };
          return {
                  boxes: state.boxes,
                  selectedBox: state.selectedBox,
                  items: /* :: */[
                    newItem,
                    state.items
                  ]
                };
        } else {
          return state;
        }
    
  }
}

exports.reducer = reducer;
/* No side effect */

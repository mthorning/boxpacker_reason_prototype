'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Utils$Boxpacker = require("./Utils.bs.js");

function toggleSelection(selectedEntity, selection) {
  if (typeof selectedEntity === "number") {
    return selection;
  } else if (selectedEntity.tag) {
    if (typeof selection === "number" || !(selection.tag && selectedEntity[0] === selection[0])) {
      return selection;
    } else {
      return /* Nothing */0;
    }
  } else if (typeof selection === "number" || selection.tag || selectedEntity[0] !== selection[0]) {
    return selection;
  } else {
    return /* Nothing */0;
  }
}

function editName(entities, id, name) {
  return Belt_List.map(entities, (function (entity) {
                if (entity.id === id) {
                  return {
                          eType: entity.eType,
                          id: entity.id,
                          name: name
                        };
                } else {
                  return entity;
                }
              }));
}

function reducer(state, action) {
  switch (action.tag | 0) {
    case /* AddBox */0 :
        var name = action[0];
        return {
                entities: /* :: */[
                  {
                    eType: /* Box */0,
                    id: Utils$Boxpacker.uuid(name),
                    name: name
                  },
                  state.entities
                ],
                selectedBox: state.selectedBox,
                selectedItem: state.selectedItem
              };
    case /* ToggleBoxSelection */1 :
        return {
                entities: state.entities,
                selectedBox: toggleSelection(state.selectedBox, action[0]),
                selectedItem: state.selectedItem
              };
    case /* EditBoxName */2 :
        var id = action[0];
        return {
                entities: editName(state.entities, id, action[1]),
                selectedBox: /* Selected */Block.__(0, [id]),
                selectedItem: state.selectedItem
              };
    case /* DeleteBox */3 :
        var id$1 = action[0];
        return {
                entities: Belt_List.keep(state.entities, (function (entity) {
                        var match = entity.eType;
                        if (match) {
                          return match[0] !== id$1;
                        } else {
                          return entity.id !== id$1;
                        }
                      })),
                selectedBox: state.selectedBox,
                selectedItem: state.selectedItem
              };
    case /* ToggleItemSelection */4 :
        return {
                entities: state.entities,
                selectedBox: state.selectedBox,
                selectedItem: toggleSelection(state.selectedItem, action[0])
              };
    case /* AddItem */5 :
        var name$1 = action[0];
        var match = state.selectedBox;
        if (typeof match === "number") {
          return state;
        } else {
          return {
                  entities: /* :: */[
                    {
                      eType: /* Item */[match[0]],
                      id: Utils$Boxpacker.uuid(name$1),
                      name: name$1
                    },
                    state.entities
                  ],
                  selectedBox: state.selectedBox,
                  selectedItem: state.selectedItem
                };
        }
    case /* EditItemName */6 :
        var id$2 = action[0];
        return {
                entities: editName(state.entities, id$2, action[1]),
                selectedBox: state.selectedBox,
                selectedItem: /* Selected */Block.__(0, [id$2])
              };
    case /* DeleteItem */7 :
        var id$3 = action[0];
        return {
                entities: Belt_List.keep(state.entities, (function (entity) {
                        return entity.id !== id$3;
                      })),
                selectedBox: state.selectedBox,
                selectedItem: state.selectedItem
              };
    
  }
}

exports.toggleSelection = toggleSelection;
exports.editName = editName;
exports.reducer = reducer;
/* No side effect */

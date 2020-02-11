'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ItemModal$Boxpacker = require("./ItemModal.bs.js");
var EntityList$Boxpacker = require("./EntityList.bs.js");

function Items(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var clickHandler = function (selection) {
    return Curry._1(dispatch, /* ToggleItemSelection */Block.__(4, [selection]));
  };
  var onSubmit = function (name, resetInput) {
    var match = state.selectedBox;
    if (typeof match === "number") {
      return /* () */0;
    } else {
      Curry._1(dispatch, /* AddItem */Block.__(5, [name]));
      return Curry._1(resetInput, /* () */0);
    }
  };
  var onEdit = function (id, name, resetInput) {
    Curry._1(dispatch, /* EditItemName */Block.__(6, [
            id,
            name
          ]));
    return Curry._1(resetInput, /* () */0);
  };
  var entities = Belt_List.keep(state.entities, (function (entity) {
          var match = entity.eType;
          var match$1 = state.selectedBox;
          if (match && typeof match$1 !== "number") {
            return match[0] === match$1[0];
          } else {
            return false;
          }
        }));
  var closeModal = function (param) {
    return Curry._1(dispatch, /* ToggleItemSelection */Block.__(4, [/* Nothing */0]));
  };
  return React.createElement(EntityList$Boxpacker.make, {
              onEdit: onEdit,
              onSubmit: onSubmit,
              clickHandler: clickHandler,
              entities: entities,
              displayOnEntityClick: (function (id) {
                  return React.createElement(ItemModal$Boxpacker.make, {
                              closeModal: closeModal,
                              getItem: (function (param) {
                                  var id$1 = id;
                                  return List.find((function (entity) {
                                                return entity.id === id$1;
                                              }), state.entities);
                                })
                            });
                }),
              selectedEntity: state.selectedItem
            });
}

var make = Items;

exports.make = make;
/* react Not a pure module */

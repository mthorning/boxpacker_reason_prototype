'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var List$Boxpacker = require("./List.bs.js");

function Items(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var onEdit = function (id, name) {
    return Curry._1(dispatch, /* EditItemName */Block.__(5, [
                  id,
                  name
                ]));
  };
  var onSubmit = function (name) {
    return Curry._1(dispatch, /* AddItem */Block.__(4, [name]));
  };
  var clickHandler = function (selection) {
    return Curry._1(dispatch, /* ToggleItemSelection */Block.__(3, [selection]));
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
  return React.createElement(List$Boxpacker.make, {
              onEdit: onEdit,
              onSubmit: onSubmit,
              clickHandler: clickHandler,
              entities: entities,
              selectedEntity: state.selectedItem
            });
}

var make = Items;

exports.make = make;
/* react Not a pure module */

'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var List$Boxpacker = require("./List.bs.js");

function Boxes(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var onEdit = function (id, name) {
    return Curry._1(dispatch, /* EditBoxName */Block.__(2, [
                  id,
                  name
                ]));
  };
  var onSubmit = function (name) {
    return Curry._1(dispatch, /* AddBox */Block.__(0, [name]));
  };
  var clickHandler = function (selection) {
    return Curry._1(dispatch, /* ToggleBoxSelection */Block.__(1, [selection]));
  };
  var entities = Belt_List.keep(state.entities, (function (entity) {
          var match = entity.eType;
          if (match) {
            return false;
          } else {
            return true;
          }
        }));
  return React.createElement(List$Boxpacker.make, {
              onEdit: onEdit,
              onSubmit: onSubmit,
              clickHandler: clickHandler,
              entities: entities,
              selectedEntity: state.selectedBox
            });
}

var make = Boxes;

exports.make = make;
/* react Not a pure module */

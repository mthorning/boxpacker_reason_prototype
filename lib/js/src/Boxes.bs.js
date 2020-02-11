'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Ai = require("react-icons/ai");
var EntityList$Boxpacker = require("./EntityList.bs.js");
var DeleteBoxModal$Boxpacker = require("./DeleteBoxModal.bs.js");

function nameIsUnique(entities, name) {
  return !Belt_List.some(entities, (function (entity) {
                var match = entity.eType;
                if (match) {
                  return false;
                } else {
                  return entity.name === name;
                }
              }));
}

function itemCount(entities, id) {
  return Belt_List.length(Belt_List.keep(entities, (function (entity) {
                    var match = entity.eType;
                    if (match) {
                      return match[0] === id;
                    } else {
                      return false;
                    }
                  })));
}

function deleteMessage(itemCount) {
  var plural = itemCount !== 1 ? " items" : " item";
  return "Are you sure you want to deleted this box and its " + (String(itemCount) + (plural + "?"));
}

function Boxes(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var clickHandler = function (selection) {
    return Curry._1(dispatch, /* ToggleBoxSelection */Block.__(1, [selection]));
  };
  var match = React.useState((function () {
          return /* NoDelete */0;
        }));
  var setShowDelete = match[1];
  var showDelete = match[0];
  var onSubmit = function (name, resetInput) {
    if (nameIsUnique(state.entities, name)) {
      Curry._1(dispatch, /* AddBox */Block.__(0, [name]));
      return Curry._1(resetInput, /* () */0);
    } else {
      return 0;
    }
  };
  var onEdit = function (id, name, resetInput) {
    Curry._1(dispatch, /* EditBoxName */Block.__(2, [
            id,
            name
          ]));
    return Curry._1(resetInput, /* () */0);
  };
  var boxes = Belt_List.keep(state.entities, (function (entity) {
          var match = entity.eType;
          if (match) {
            return false;
          } else {
            return true;
          }
        }));
  var tmp;
  if (showDelete) {
    var id = showDelete[0];
    tmp = React.createElement(DeleteBoxModal$Boxpacker.make, {
          onConfirmDeletion: (function (param) {
              return Curry._1(dispatch, /* DeleteBox */Block.__(3, [id]));
            }),
          closeModal: (function (param) {
              return Curry._1(setShowDelete, (function (param) {
                            return /* NoDelete */0;
                          }));
            }),
          message: showDelete[1]
        });
  } else {
    tmp = null;
  }
  return React.createElement(React.Fragment, undefined, tmp, React.createElement(EntityList$Boxpacker.make, {
                  onEdit: onEdit,
                  onSubmit: onSubmit,
                  clickHandler: clickHandler,
                  entities: boxes,
                  displayOnEntityClick: (function (id) {
                      return React.createElement(Ai.AiOutlineDelete, {
                                  onClick: (function (param) {
                                      var id$1 = id;
                                      var $$event = param;
                                      $$event.stopPropagation();
                                      var itemCount$1 = itemCount(state.entities, id$1);
                                      if (itemCount$1 !== 0) {
                                        return Curry._1(setShowDelete, (function (param) {
                                                      return /* Delete */[
                                                              id$1,
                                                              deleteMessage(itemCount$1)
                                                            ];
                                                    }));
                                      } else {
                                        return Curry._1(dispatch, /* DeleteBox */Block.__(3, [id$1]));
                                      }
                                    })
                                });
                    }),
                  selectedEntity: state.selectedBox
                }));
}

var make = Boxes;

exports.nameIsUnique = nameIsUnique;
exports.itemCount = itemCount;
exports.deleteMessage = deleteMessage;
exports.make = make;
/* react Not a pure module */

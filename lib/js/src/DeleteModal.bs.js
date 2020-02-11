'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Modal$Boxpacker = require("./Modal.bs.js");
var Utils$Boxpacker = require("./Utils.bs.js");

var container = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* [] */0
      ]
    ]);

var buttons = Css.style(/* :: */[
      Css.textAlign(/* right */-379319332),
      /* [] */0
    ]);

var button = Css.style(/* :: */[
      Css.marginLeft(Css.px(5)),
      /* :: */[
        Css.cursor(/* pointer */-786317123),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container,
  buttons: buttons,
  button: button
};

function DeleteModal(Props) {
  var entities = Props.entities;
  var onConfirmDeletion = Props.onConfirmDeletion;
  var showDelete = Props.showDelete;
  var setShowDelete = Props.setShowDelete;
  var closeModal = function (param) {
    return Curry._1(setShowDelete, (function (param) {
                  return /* NoDelete */0;
                }));
  };
  var message = function (itemCount) {
    var plural = itemCount !== 1 ? " items" : " item";
    return "Are you sure you want to deleted this box and its " + (String(itemCount) + (plural + "?"));
  };
  if (showDelete) {
    var id = showDelete[0];
    var itemCount = Belt_List.length(Belt_List.keep(entities, (function (entity) {
                var match = entity.eType;
                if (match) {
                  return match[0] === id;
                } else {
                  return false;
                }
              })));
    if (itemCount > 0) {
      return React.createElement(Modal$Boxpacker.make, {
                  children: React.createElement("div", {
                        className: container
                      }, React.createElement("p", undefined, Utils$Boxpacker.s(message(itemCount))), React.createElement("div", {
                            className: buttons
                          }, React.createElement("button", {
                                className: button,
                                onClick: closeModal
                              }, Utils$Boxpacker.s("No")), React.createElement("button", {
                                className: button,
                                onClick: (function (param) {
                                    Curry._1(onConfirmDeletion, id);
                                    return Curry._1(setShowDelete, (function (param) {
                                                  return /* NoDelete */0;
                                                }));
                                  })
                              }, Utils$Boxpacker.s("Yes")))),
                  closeModal: closeModal
                });
    } else {
      return null;
    }
  } else {
    return null;
  }
}

var make = DeleteModal;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

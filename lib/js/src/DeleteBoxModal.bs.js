'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
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

function DeleteBoxModal(Props) {
  var onConfirmDeletion = Props.onConfirmDeletion;
  var closeModal = Props.closeModal;
  var message = Props.message;
  var onDelete = function (param) {
    Curry._1(onConfirmDeletion, /* () */0);
    return Curry._1(closeModal, /* () */0);
  };
  return React.createElement(Modal$Boxpacker.make, {
              children: React.createElement("div", {
                    className: container
                  }, React.createElement("p", undefined, Utils$Boxpacker.s(message)), React.createElement("div", {
                        className: buttons
                      }, React.createElement("button", {
                            className: button,
                            onClick: (function (param) {
                                return Curry._1(closeModal, /* () */0);
                              })
                          }, Utils$Boxpacker.s("No")), React.createElement("button", {
                            className: button,
                            onClick: onDelete
                          }, Utils$Boxpacker.s("Yes")))),
              closeModal: closeModal
            });
}

var make = DeleteBoxModal;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

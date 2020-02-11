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

var formItem = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(Css.spaceBetween),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100.00
              ]),
          /* :: */[
            Css.marginTop(Css.px(5)),
            /* [] */0
          ]
        ]
      ]
    ]);

var label = Css.style(/* :: */[
      Css.textAlign(/* right */-379319332),
      /* :: */[
        Css.marginRight(Css.px(5)),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container,
  formItem: formItem,
  label: label
};

function ItemModal$FormItem(Props) {
  var children = Props.children;
  var label$1 = Props.label;
  return React.createElement("div", {
              className: formItem
            }, React.createElement("span", {
                  className: label
                }, label$1), children);
}

var FormItem = {
  make: ItemModal$FormItem
};

function ItemModal(Props) {
  var closeModal = Props.closeModal;
  var getItem = Props.getItem;
  var item = Curry._1(getItem, /* () */0);
  return React.createElement(Modal$Boxpacker.make, {
              children: React.createElement("div", {
                    className: container
                  }, React.createElement("h2", undefined, Utils$Boxpacker.s(item.name)), React.createElement(ItemModal$FormItem, {
                        children: React.createElement("input", {
                              type: "number"
                            }),
                        label: Utils$Boxpacker.s("Quantity")
                      }), React.createElement(ItemModal$FormItem, {
                        children: React.createElement("textarea", undefined),
                        label: Utils$Boxpacker.s("Description")
                      })),
              closeModal: closeModal
            });
}

var make = ItemModal;

exports.Styles = Styles;
exports.FormItem = FormItem;
exports.make = make;
/* container Not a pure module */

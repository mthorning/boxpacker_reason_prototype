'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$Boxpacker = require("./Utils.bs.js");
var Entity$Boxpacker = require("./Entity.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

var container = Css.style(/* :: */[
      Css.borderRadius(Css.px(5)),
      /* :: */[
        Css.width(Css.px(300)),
        /* :: */[
          Css.padding(Css.px(5)),
          /* :: */[
            Css.border(Css.px(1), Css.solid, Css.black),
            /* [] */0
          ]
        ]
      ]
    ]);

var list = Css.style(/* :: */[
      Css.padding(Css.px(0)),
      /* [] */0
    ]);

var listItem = Css.style(/* :: */[
      Css.listStyleType(Css.none),
      /* :: */[
        Css.padding(Css.px(2)),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container,
  list: list,
  listItem: listItem
};

function Items(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var onSubmit = function (name) {
    return Curry._1(dispatch, /* AddItem */Block.__(2, [name]));
  };
  return React.createElement("div", {
              className: container
            }, React.createElement(InputBox$Boxpacker.make, {
                  onSubmit: onSubmit
                }), React.createElement("ul", {
                  className: list
                }, Utils$Boxpacker.mapElements(state.items, (function (item) {
                        return React.createElement("li", {
                                    key: item.id,
                                    className: listItem
                                  }, React.createElement(Entity$Boxpacker.make, {
                                        onEdit: (function (name) {
                                            return name;
                                          }),
                                        name: item.name
                                      }));
                      }))));
}

var make = Items;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

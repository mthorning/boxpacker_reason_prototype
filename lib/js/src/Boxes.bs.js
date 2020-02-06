'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
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

function Boxes(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var onSubmit = function (name) {
    return Curry._1(dispatch, /* AddBox */[name]);
  };
  return React.createElement("div", {
              className: container
            }, React.createElement(InputBox$Boxpacker.make, {
                  onSubmit: onSubmit
                }), React.createElement("ul", {
                  className: list
                }, Utils$Boxpacker.mapElements(state.boxes, (function (box) {
                        return React.createElement("li", {
                                    key: box.id,
                                    className: listItem
                                  }, React.createElement(Entity$Boxpacker.make, {
                                        onEdit: (function (name) {
                                            return name;
                                          }),
                                        name: box.name
                                      }));
                      }))));
}

var make = Boxes;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

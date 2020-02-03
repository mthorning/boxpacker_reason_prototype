'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$Boxpacker = require("./Utils.bs.js");
var Entity$Boxpacker = require("./Entity.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

function Boxes(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var onSubmit = function (name) {
    return Curry._1(dispatch, /* AddBox */[name]);
  };
  return React.createElement(React.Fragment, undefined, React.createElement(InputBox$Boxpacker.make, {
                  onSubmit: onSubmit
                }), React.createElement("ul", undefined, Utils$Boxpacker.mapElements(state.boxes, (function (box) {
                        return React.createElement("li", {
                                    key: box.id
                                  }, React.createElement(Entity$Boxpacker.make, {
                                        onEdit: (function (name) {
                                            return name;
                                          }),
                                        name: box.name
                                      }));
                      }))));
}

var make = Boxes;

exports.make = make;
/* react Not a pure module */

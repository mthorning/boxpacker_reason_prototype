'use strict';

var React = require("react");
var Utils$Boxpacker = require("./Utils.bs.js");
var Entity$Boxpacker = require("./Entity.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

function Panel(Props) {
  var entities = Props.entities;
  var onSubmit = Props.addEntity;
  var onEdit = Props.editEntity;
  return React.createElement(React.Fragment, undefined, React.createElement(InputBox$Boxpacker.make, {
                  onSubmit: onSubmit
                }), React.createElement("ul", undefined, Utils$Boxpacker.mapElements(entities, (function (entity) {
                        return React.createElement("li", {
                                    key: entity.id.toString()
                                  }, React.createElement(Entity$Boxpacker.make, {
                                        onEdit: onEdit,
                                        name: entity.name
                                      }));
                      }))));
}

var make = Panel;

exports.make = make;
/* react Not a pure module */

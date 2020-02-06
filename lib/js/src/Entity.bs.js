'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var React = require("react");
var Utils$Boxpacker = require("./Utils.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

var container = Css.style(/* :: */[
      Css.padding(Css.px(2)),
      /* :: */[
        Css.borderBottom(Css.px(1), Css.solid, Css.black),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container
};

function Entity(Props) {
  var $staropt$star = Props.edit;
  var onSubmit = Props.onEdit;
  var name = Props.name;
  var edit = $staropt$star !== undefined ? $staropt$star : false;
  return React.createElement("div", {
              className: container
            }, edit ? React.createElement(InputBox$Boxpacker.make, {
                    placeholder: "Edit item",
                    onSubmit: onSubmit
                  }) : React.createElement("span", undefined, Utils$Boxpacker.s(name)));
}

var make = Entity;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

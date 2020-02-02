'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Io = require("react-icons/io");

var container = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

function closeIcon(visible) {
  return Css.style(/* :: */[
              Css.position(Css.absolute),
              /* :: */[
                Css.top(Css.px(10)),
                /* :: */[
                  Css.left(Css.px(170)),
                  /* :: */[
                    Css.display(visible ? Css.block : Css.none),
                    /* :: */[
                      Css.cursor(/* pointer */-786317123),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

var Styles = {
  container: container,
  closeIcon: closeIcon
};

var CloseIcon = { };

function InputBox(Props) {
  var match = Props.placeholder;
  var placeholder = match !== undefined ? match : "";
  var onSubmit = Props.onSubmit;
  var match$1 = React.useState((function () {
          return "";
        }));
  var setValue = match$1[1];
  var value = match$1[0];
  var onChange = function ($$event) {
    var inputVal = $$event.target.value;
    return Curry._1(setValue, (function (param) {
                  return inputVal;
                }));
  };
  var onKeyDown = function ($$event) {
    if ($$event.keyCode === 13 && value !== "") {
      Curry._1(onSubmit, value);
      return Curry._1(setValue, (function (param) {
                    return "";
                  }));
    } else {
      return 0;
    }
  };
  var onClick = function (param) {
    return Curry._1(setValue, (function (param) {
                  return "";
                }));
  };
  return React.createElement("div", undefined, React.createElement("input", {
                  placeholder: placeholder,
                  value: value,
                  onKeyDown: onKeyDown,
                  onChange: onChange
                }), React.createElement(Io.IoIosCloseCircleOutline, {
                  className: closeIcon(value !== ""),
                  onClick: onClick
                }));
}

var make = InputBox;

exports.Styles = Styles;
exports.CloseIcon = CloseIcon;
exports.make = make;
/* container Not a pure module */

'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var container = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

function closeIcon(visible) {
  return Css.style(/* :: */[
              Css.top(Css.px(5)),
              /* :: */[
                Css.right(Css.px(5)),
                /* :: */[
                  Css.fontSize(Css.px(20)),
                  /* :: */[
                    Css.position(Css.absolute),
                    /* :: */[
                      Css.cursor(/* pointer */-786317123),
                      /* :: */[
                        Css.display(visible ? Css.block : Css.none),
                        /* [] */0
                      ]
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

function InputBox(Props) {
  var $staropt$star = Props.placeholder;
  var onSubmit = Props.onSubmit;
  var placeholder = $staropt$star !== undefined ? $staropt$star : "";
  var match = React.useState((function () {
          return "";
        }));
  var setValue = match[1];
  var value = match[0];
  var onChange = function ($$event) {
    var inputVal = $$event.target.value;
    return Curry._1(setValue, (function (param) {
                  return inputVal;
                }));
  };
  var onKeyDown = function ($$event) {
    if ($$event.keyCode === 13 && value !== "") {
      return Curry._2(onSubmit, value, (function (param) {
                    return Curry._1(setValue, (function (param) {
                                  return "";
                                }));
                  }));
    } else {
      return 0;
    }
  };
  var stop = function ($$event) {
    $$event.stopPropagation();
    return /* () */0;
  };
  return React.createElement("div", {
              className: container,
              onClick: stop
            }, React.createElement("input", {
                  placeholder: placeholder,
                  type: "search",
                  value: value,
                  onKeyDown: onKeyDown,
                  onChange: onChange
                }));
}

var make = InputBox;

exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

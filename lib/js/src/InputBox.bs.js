'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Io = require("react-icons/io");

var container = Css.style(/* :: */[
      Css.padding(Css.px(15)),
      /* :: */[
        Css.position(Css.relative),
        /* [] */0
      ]
    ]);

var input = Css.style(/* :: */[
      Css.borderRadius(Css.px(5)),
      /* :: */[
        Css.height(Css.px(35)),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100.00
              ]),
          /* :: */[
            Css.boxSizing(Css.borderBox),
            /* [] */0
          ]
        ]
      ]
    ]);

function closeIcon(visible) {
  return Css.style(/* :: */[
              Css.top(Css.px(2)),
              /* :: */[
                Css.right(Css.px(4)),
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
            ]);
}

var Styles = {
  container: container,
  input: input,
  closeIcon: closeIcon
};

var CloseIcon = { };

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
  return React.createElement("div", {
              className: container
            }, React.createElement("input", {
                  className: input,
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

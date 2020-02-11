'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var center = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(Css.center),
        /* :: */[
          Css.justifyContent(Css.center),
          /* [] */0
        ]
      ]
    ]);

var container = Css.merge(/* :: */[
      Css.style(/* :: */[
            Css.position(Css.fixed),
            /* :: */[
              Css.top(Css.px(0)),
              /* :: */[
                Css.right(Css.px(0)),
                /* :: */[
                  Css.bottom(Css.px(0)),
                  /* :: */[
                    Css.left(Css.px(0)),
                    /* :: */[
                      Css.zIndex(5),
                      /* :: */[
                        Css.background(Css.rgba(0, 0, 0, 0.7)),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
      /* :: */[
        center,
        /* [] */0
      ]
    ]);

var modal = Css.merge(/* :: */[
      Css.style(/* :: */[
            Css.borderRadius(Css.px(5)),
            /* :: */[
              Css.width(Css.vh(50.00)),
              /* :: */[
                Css.maxWidth(Css.px(700)),
                /* :: */[
                  Css.minHeight(Css.px(200)),
                  /* :: */[
                    Css.minWidth(Css.px(400)),
                    /* :: */[
                      Css.width(Css.vw(50.00)),
                      /* :: */[
                        Css.background(Css.white),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]),
      /* :: */[
        center,
        /* [] */0
      ]
    ]);

var Styles = {
  center: center,
  container: container,
  modal: modal
};

function Modal(Props) {
  var children = Props.children;
  var closeModal = Props.closeModal;
  var onContainerClick = function ($$event) {
    $$event.stopPropagation();
    return Curry._1(closeModal, /* () */0);
  };
  var onModalClick = function ($$event) {
    $$event.stopPropagation();
    return /* () */0;
  };
  return React.createElement("div", {
              className: container,
              onClick: onContainerClick
            }, React.createElement("div", {
                  className: modal,
                  onClick: onModalClick
                }, children));
}

var make = Modal;

exports.Styles = Styles;
exports.make = make;
/* center Not a pure module */

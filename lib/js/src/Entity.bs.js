'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Theme$Boxpacker = require("./Theme.bs.js");
var Utils$Boxpacker = require("./Utils.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

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
        Css.height(Css.px(30)),
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
              Css.top(Css.px(20)),
              /* :: */[
                Css.right(Css.px(20)),
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

var InputStyles = {
  container: container,
  input: input,
  closeIcon: closeIcon
};

function container$1(selected) {
  var base_000 = Css.padding(Css.px(2));
  var base_001 = /* :: */[
    Css.borderBottom(Css.px(1), Css.solid, Css.black),
    /* [] */0
  ];
  var base = /* :: */[
    base_000,
    base_001
  ];
  return Css.style(selected ? Pervasives.$at(Theme$Boxpacker.selectionColor, base) : base);
}

var entity = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(Css.spaceBetween),
        /* :: */[
          Css.alignItems(Css.center),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container$1,
  entity: entity
};

function Entity(Props) {
  var edit = Props.edit;
  var selected = Props.selected;
  var onSubmit = Props.onEdit;
  var name = Props.name;
  var id = Props.id;
  var displayOnEntityClick = Props.displayOnEntityClick;
  return React.createElement("div", {
              className: container$1(selected)
            }, edit ? React.createElement(InputBox$Boxpacker.make, {
                    onSubmit: Curry._1(onSubmit, id)
                  }) : React.createElement("div", {
                    className: entity
                  }, Utils$Boxpacker.s(name), selected ? Curry._1(displayOnEntityClick, id) : null));
}

var make = Entity;

exports.InputStyles = InputStyles;
exports.Styles = Styles;
exports.make = make;
/* container Not a pure module */

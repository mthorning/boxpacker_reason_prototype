'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Boxes$Boxpacker = require("./Boxes.bs.js");
var Utils$Boxpacker = require("./Utils.bs.js");
var AppState$Boxpacker = require("./AppState.bs.js");

var initialState_boxes = /* :: */[
  {
    id: Utils$Boxpacker.uuid("one"),
    name: "one"
  },
  /* :: */[
    {
      id: Utils$Boxpacker.uuid("two"),
      name: "two"
    },
    /* :: */[
      {
        id: Utils$Boxpacker.uuid("three"),
        name: "three"
      },
      /* [] */0
    ]
  ]
];

var initialState = {
  boxes: initialState_boxes,
  selectedBox: undefined,
  items: /* [] */0
};

function Index$App(Props) {
  var match = React.useReducer(AppState$Boxpacker.reducer, initialState);
  return React.createElement(Boxes$Boxpacker.make, {
              state: match[0],
              dispatch: match[1]
            });
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.initialState = initialState;
exports.App = App;
/* initialState Not a pure module */

'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Boxes$Boxpacker = require("./Boxes.bs.js");
var Items$Boxpacker = require("./Items.bs.js");
var Utils$Boxpacker = require("./Utils.bs.js");
var AppState$Boxpacker = require("./AppState.bs.js");

var boxOne_id = Utils$Boxpacker.uuid("boxOne");

var boxOne = {
  eType: /* Box */0,
  id: boxOne_id,
  name: "one"
};

var itemOne_eType = /* Item */[boxOne_id];

var itemOne_id = Utils$Boxpacker.uuid("itemOne");

var itemOne = {
  eType: itemOne_eType,
  id: itemOne_id,
  name: "one"
};

var initialState_entities = /* :: */[
  boxOne,
  /* :: */[
    {
      eType: /* Box */0,
      id: Utils$Boxpacker.uuid("boxTwo"),
      name: "two"
    },
    /* :: */[
      {
        eType: /* Box */0,
        id: Utils$Boxpacker.uuid("boxThree"),
        name: "three"
      },
      /* :: */[
        itemOne,
        /* [] */0
      ]
    ]
  ]
];

var initialState_selectedBox = /* Selected */Block.__(0, [boxOne_id]);

var initialState_selectedItem = /* Selected */Block.__(0, [itemOne_id]);

var initialState = {
  entities: initialState_entities,
  selectedBox: initialState_selectedBox,
  selectedItem: initialState_selectedItem
};

var container = Css.style(/* :: */[
      Css.padding(Css.px(10)),
      /* :: */[
        Css.maxWidth(Css.px(900)),
        /* :: */[
          Css.margin(Css.auto),
          /* :: */[
            Css.display(/* flex */-1010954439),
            /* :: */[
              Css.alignItems(Css.stretch),
              /* :: */[
                Css.justifyContent(Css.spaceEvenly),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  container: container
};

function Index$App(Props) {
  var match = React.useReducer(AppState$Boxpacker.reducer, initialState);
  var dispatch = match[1];
  var state = match[0];
  return React.createElement("div", {
              className: container
            }, React.createElement(Boxes$Boxpacker.make, {
                  state: state,
                  dispatch: dispatch
                }), React.createElement(Items$Boxpacker.make, {
                  state: state,
                  dispatch: dispatch
                }));
}

var App = {
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.boxOne = boxOne;
exports.itemOne = itemOne;
exports.initialState = initialState;
exports.Styles = Styles;
exports.App = App;
/* boxOne Not a pure module */

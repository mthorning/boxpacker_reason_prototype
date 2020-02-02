'use strict';

var React = require("react");
var V4 = require("uuid/v4");
var ReactDOMRe = require("reason-react/lib/js/src/ReactDOMRe.js");
var Entity$Boxpacker = require("./Entity.bs.js");

function uuid(prim) {
  return V4();
}

var entities_000 = {
  id: V4(),
  name: "item one"
};

var entities_001 = /* :: */[
  {
    id: V4(),
    name: "item two"
  },
  /* :: */[
    {
      id: V4(),
      name: "item three"
    },
    /* [] */0
  ]
];

var entities = /* :: */[
  entities_000,
  entities_001
];

function Index$App(Props) {
  return React.createElement(Entity$Boxpacker.make, {
              onEdit: (function (name) {
                  console.log(name);
                  return /* () */0;
                }),
              name: "test"
            });
}

var App = {
  uuid: uuid,
  entities: entities,
  make: Index$App
};

ReactDOMRe.renderToElementWithId(React.createElement(Index$App, { }), "root");

exports.App = App;
/* entities Not a pure module */

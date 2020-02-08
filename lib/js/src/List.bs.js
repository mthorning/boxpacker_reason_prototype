'use strict';

var Css = require("bs-css/lib/js/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Utils$Boxpacker = require("./Utils.bs.js");
var Entity$Boxpacker = require("./Entity.bs.js");
var InputBox$Boxpacker = require("./InputBox.bs.js");

var container = Css.style(/* :: */[
      Css.borderRadius(Css.px(5)),
      /* :: */[
        Css.width(Css.px(300)),
        /* :: */[
          Css.padding(Css.px(5)),
          /* :: */[
            Css.border(Css.px(1), Css.solid, Css.black),
            /* [] */0
          ]
        ]
      ]
    ]);

var inputContainer = Css.style(/* :: */[
      Css.padding(Css.px(10)),
      /* [] */0
    ]);

var ul = Css.style(/* :: */[
      Css.padding(Css.px(0)),
      /* [] */0
    ]);

var li = Css.style(/* :: */[
      Css.cursor(/* pointer */-786317123),
      /* :: */[
        Css.listStyleType(Css.none),
        /* [] */0
      ]
    ]);

var Styles = {
  container: container,
  inputContainer: inputContainer,
  ul: ul,
  li: li
};

function doubleClickHandler(clickHandler) {
  var clickState = {
    contents: /* NotClicked */0
  };
  return (function (id) {
      var match = clickState.contents;
      if (match) {
        clearTimeout(match[0]);
        clickState.contents = /* NotClicked */0;
        Curry._1(clickHandler, /* Editing */Block.__(1, [id]));
        return /* () */0;
      } else {
        var timeoutId = setTimeout((function (param) {
                clickState.contents = /* NotClicked */0;
                Curry._1(clickHandler, /* Selected */Block.__(0, [id]));
                return /* () */0;
              }), 200);
        clickState.contents = /* Clicked */[timeoutId];
        return /* () */0;
      }
    });
}

function List(Props) {
  var onEdit = Props.onEdit;
  var onSubmit = Props.onSubmit;
  var clickHandler = Props.clickHandler;
  var entities = Props.entities;
  var selectedEntity = Props.selectedEntity;
  var onClick = doubleClickHandler(clickHandler);
  return React.createElement("div", {
              className: container
            }, React.createElement("div", {
                  className: inputContainer
                }, React.createElement(InputBox$Boxpacker.make, {
                      onSubmit: onSubmit
                    })), React.createElement("ul", {
                  className: ul
                }, Utils$Boxpacker.mapElements(entities, (function (entity) {
                        var match;
                        match = typeof selectedEntity === "number" ? /* tuple */[
                            false,
                            false
                          ] : (
                            selectedEntity.tag ? /* tuple */[
                                false,
                                selectedEntity[0] === entity.id
                              ] : /* tuple */[
                                selectedEntity[0] === entity.id,
                                false
                              ]
                          );
                        return React.createElement("li", {
                                    key: entity.id,
                                    className: li,
                                    onClick: (function (param) {
                                        return Curry._1(onClick, entity.id);
                                      })
                                  }, React.createElement(Entity$Boxpacker.make, {
                                        edit: match[1],
                                        selected: match[0],
                                        onEdit: Curry._1(onEdit, entity.id),
                                        name: entity.name
                                      }));
                      }))));
}

var make = List;

exports.Styles = Styles;
exports.doubleClickHandler = doubleClickHandler;
exports.make = make;
/* container Not a pure module */

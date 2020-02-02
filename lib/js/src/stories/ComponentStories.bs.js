'use strict';

var React = require("react");
var React$1 = require("@storybook/react");
var Entity$Boxpacker = require("../Entity.bs.js");
var Knobs$BsStorybook = require("bs-storybook/lib/js/src/knobs.js");
var InputBox$Boxpacker = require("../InputBox.bs.js");
var AddonActions = require("@storybook/addon-actions");
var React$2 = require("@storybook/addon-knobs/react");

var _module = module;

React$1.storiesOf("Input", _module).addDecorator(React$2.withKnobs).add("Input", (function (param) {
        var placeholder = Knobs$BsStorybook.text("Text", "Add something", /* () */0);
        var onSubmit = AddonActions.action("Enter key pressed");
        return React.createElement(InputBox$Boxpacker.make, {
                    placeholder: placeholder,
                    onSubmit: onSubmit
                  });
      }));

React$1.storiesOf("Entity", _module).addDecorator(React$2.withKnobs).add("Entity", (function (param) {
        var edit = Knobs$BsStorybook.$$boolean("Edit", undefined, /* () */0);
        var name = Knobs$BsStorybook.text("Name", "Towels", /* () */0);
        var onEdit = function (param) {
          return AddonActions.action("Entity edited");
        };
        return React.createElement(Entity$Boxpacker.make, {
                    edit: edit,
                    onEdit: onEdit,
                    name: name
                  });
      }));

exports._module = _module;
/* _module Not a pure module */

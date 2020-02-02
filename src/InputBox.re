module Styles = {
  open Css;
  let container = style([position(relative)]);

  let closeIcon = visible =>
    style([
      position(absolute),
      top(px(10)),
      left(px(170)),
      display(visible ? block : none),
      cursor(`pointer),
    ]);
};

module CloseIcon = {
  [@bs.module "react-icons/io"] [@react.component]
  external make:
    (~className: string, ~onClick: ReactEvent.Mouse.t => unit) => React.element =
    "IoIosCloseCircleOutline";
};

[@react.component]
let make = (~placeholder="", ~onSubmit) => {
  let (value, setValue) = React.useState(_ => "");

  let onChange = event => {
    let inputVal = event->ReactEvent.Form.target##value;
    setValue(_ => inputVal);
  };

  let onKeyDown = event =>
    if (event->ReactEvent.Keyboard.keyCode === 13 && value !== "") {
      onSubmit(value);
      setValue(_ => "");
    };

  let onClick = _ => setValue(_ => "");

  <div>
    <input placeholder onChange onKeyDown value />
    <CloseIcon className={Styles.closeIcon(value !== "")} onClick />
  </div>;
};
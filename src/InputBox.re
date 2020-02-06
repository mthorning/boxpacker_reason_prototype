module Styles = {
  open Css;
  let container = style([15->px->padding, position(relative)]);
  let input =
    style([
      5->px->borderRadius,
      35->px->height,
      100.00->`percent->width,
      boxSizing(borderBox),
    ]);
  let closeIcon = visible =>
    style([
      2->px->top,
      4->px->right,
      position(absolute),
      cursor(`pointer),
      display(visible ? block : none),
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

  <div className=Styles.container>
    <input className=Styles.input placeholder onChange onKeyDown value />
    <CloseIcon className={Styles.closeIcon(value !== "")} onClick />
  </div>;
};
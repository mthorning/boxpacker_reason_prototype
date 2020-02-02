open Utils;

module Styles = {
  open Css;

  let container = style([padding(px(2)), border(px(1), solid, black)]);
};

[@react.component]
let make = (~edit=false, ~onEdit as onSubmit, ~name) => {
  <div className=Styles.container>
    {edit
       ? <InputBox placeholder="Edit item" onSubmit /> : <span> name->s </span>}
  </div>;
};
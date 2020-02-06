open Utils;

module Styles = {
  open Css;

  let container = style([2->px->padding, 1->px->borderBottom(solid, black)]);
};

[@react.component]
let make = (~edit=false, ~onEdit as onSubmit, ~name) => {
  <div className=Styles.container>
    {edit
       ? <InputBox placeholder="Edit item" onSubmit /> : <span> name->s </span>}
  </div>;
};
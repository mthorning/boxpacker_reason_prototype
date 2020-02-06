open Utils;
open AppState;

module Styles = {
  open Css;

  let container =
    style([
      5->px->borderRadius,
      300->px->width,
      5->px->padding,
      1->px->border(solid, black),
    ]);
  let list = style([0->px->padding]);
  let listItem = style([listStyleType(none), 2->px->padding]);
};

[@react.component]
let make = (~state, ~dispatch) => {
  let onSubmit = name => dispatch(AddBox(name));
  <div className=Styles.container>
    <InputBox onSubmit />
    <ul className=Styles.list>
      {state.boxes
       ->mapElements(box => {
           /*
            let onEdit = name => dispatch(EditBoxName(box.id, name));
            */
           <li key={box.id} className=Styles.listItem>
             <Entity name={box.name} onEdit={name => name} />
           </li>
         })}
    </ul>
  </div>;
};
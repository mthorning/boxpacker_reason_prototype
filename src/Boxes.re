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

  let listItem = (~selectedBox, ~boxId) => {
    let base = [cursor(`pointer), listStyleType(none), 2->px->padding];
    switch (selectedBox) {
    | Some(id) =>
      let highlight = id === boxId ? [background(red)] : [];
      style(base @ highlight);
    | None => style(base)
    };
  };
};

[@react.component]
let make = (~state, ~dispatch) => {
  let onSubmit = name => dispatch(AddBox(name));
  let onBoxClick = id => dispatch(ToggleBoxSelection(id));
  <div className=Styles.container>
    <InputBox onSubmit />
    <ul className=Styles.list>
      {state.boxes
       ->mapElements(box => {
           /*
            let onEdit = name => dispatch(EditBoxName(box.id, name));
            */
           <li
             onClick={_ => onBoxClick(box.id)}
             key={box.id}
             className={Styles.listItem(
               ~selectedBox=state.selectedBox,
               ~boxId=box.id,
             )}>
             <Entity name={box.name} onEdit={name => name} />
           </li>
         })}
    </ul>
  </div>;
};
open Utils;
open AppState;

[@react.component]
let make = (~state, ~dispatch) => {
  let onSubmit = name => dispatch(AddBox(name));
  <>
    <InputBox onSubmit />
    <ul>
      {state.boxes
       ->mapElements(box => {
           /*
            let onEdit = name => dispatch(EditBoxName(box.id, name));
            */
           <li key={box.id}>
             <Entity name={box.name} onEdit={name => name} />
           </li>
         })}
    </ul>
  </>;
};
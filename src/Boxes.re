open AppState;

[@react.component]
let make = (~state, ~dispatch) => {
  let onEdit = (id, name) => dispatch(EditBoxName(id, name));
  let onSubmit = name => dispatch(AddBox(name));
  let clickHandler = selection => dispatch(ToggleBoxSelection(selection));
  let entities =
    state.entities
    ->Belt.List.keep(entity => {
        switch (entity.eType) {
        | Box => true
        | Item(_) => false
        }
      });
  <List
    onEdit
    onSubmit
    clickHandler
    entities
    selectedEntity={state.selectedBox}
  />;
};
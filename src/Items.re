open AppState;

[@react.component]
let make = (~state, ~dispatch) => {
  let clickHandler = selection => dispatch(ToggleItemSelection(selection));
  let onDeleteClick = (id, _) => dispatch(DeleteItem(id));

  let onSubmit = (name, resetInput) => {
    switch (state.selectedBox) {
    | Nothing => ()
    | _ =>
      dispatch(AddItem(name));
      resetInput();
    };
  };

  let onEdit = (id, name, resetInput) => {
    dispatch(EditItemName(id, name));
    resetInput();
  };

  let entities =
    state.entities
    ->Belt.List.keep(entity => {
        switch (entity.eType, state.selectedBox) {
        | (Box, _) => false
        | (_, Nothing) => false
        | (Item(boxId), Editing(selectedBox))
        | (Item(boxId), Selected(selectedBox)) => boxId === selectedBox
        }
      });

  <List
    onDeleteClick
    onEdit
    onSubmit
    clickHandler
    entities
    selectedEntity={state.selectedItem}
  />;
};
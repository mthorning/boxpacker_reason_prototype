open AppState;

[@react.component]
let make = (~state, ~dispatch) => {
  let onEdit = (id, name) => dispatch(EditItemName(id, name));
  let onSubmit = name => dispatch(AddItem(name));
  let clickHandler = selection => dispatch(ToggleItemSelection(selection));
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
    onEdit
    onSubmit
    clickHandler
    entities
    selectedEntity={state.selectedItem}
  />;
};
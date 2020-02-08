open Utils;

type uuid = string;

type eType =
  | Box
  | Item(uuid);

type entity = {
  eType,
  id: uuid,
  name: string,
};

type selection =
  | Nothing
  | Selected(uuid)
  | Editing(uuid);

type state = {
  entities: list(entity),
  selectedBox: selection,
  selectedItem: selection,
};

type action =
  | AddBox(string)
  | ToggleBoxSelection(selection)
  | EditBoxName(uuid, string)
  | ToggleItemSelection(selection)
  | AddItem(string)
  | EditItemName(uuid, string);

let toggleSelection = (selectedEntity, selection) => {
  switch (selectedEntity, selection) {
  | (Editing(selectedId), Editing(clickedId))
  | (Selected(selectedId), Selected(clickedId)) =>
    selectedId === clickedId ? Nothing : selection
  | _ => selection
  };
};

let editName = (entities, id, name) =>
  entities->Belt.List.map(entity => {
    entity.id === id ? {...entity, name} : entity
  });

let reducer = (state, action) => {
  switch (action) {
  | AddBox(name) => {
      ...state,
      entities: [{id: uuid(name), name, eType: Box}, ...state.entities],
    }
  | ToggleBoxSelection(selection) => {
      ...state,
      selectedBox: toggleSelection(state.selectedBox, selection),
    }
  | EditBoxName(id, name) => {
      ...state,
      entities: editName(state.entities, id, name),
      selectedBox: Selected(id),
    }
  | AddItem(name) =>
    switch (state.selectedBox) {
    | Selected(box)
    | Editing(box) => {
        ...state,
        entities: [
          {id: uuid(name), name, eType: Item(box)},
          ...state.entities,
        ],
      }
    | Nothing => state
    }
  | ToggleItemSelection(selection) => {
      ...state,
      selectedItem: toggleSelection(state.selectedItem, selection),
    }
  | EditItemName(id, name) => {
      ...state,
      entities: editName(state.entities, id, name),
      selectedItem: Selected(id),
    }
  };
};
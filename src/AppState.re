open Utils;

type uuid = string;

type box = {
  id: uuid,
  name: string,
};

type item = {
  id: uuid,
  box: uuid,
  name: string,
};

type state = {
  boxes: list(box),
  selectedBox: option(uuid),
  items: list(item),
};

type action =
  | AddBox(string)
  | ToggleBoxSelection(uuid)
  | AddItem(string);
/*
 | EditBoxName(uuid, string);
 */

let reducer = (state, action) => {
  switch (action) {
  | AddBox(name) => {
      ...state,
      boxes: state.boxes @ [{id: uuid(name), name}],
    }
  | ToggleBoxSelection(id) =>
    switch (state.selectedBox) {
    | Some(selectedBox) => {
        ...state,
        selectedBox: id === selectedBox ? None : Some(id),
      }
    | None => {...state, selectedBox: Some(id)}
    }
  | AddItem(name) =>
    switch (state.selectedBox) {
    | Some(box) =>
      let newItem = {id: uuid(name), box, name};
      {...state, items: [newItem, ...state.items]};
    | None => state
    }
  /*
   | EditBoxName(id, name) =>
     let box: box = List.find(box => box.id === id, state.boxes);
     let replacement = {...box, name};
     {
       ...state,
       boxes: [
         replacement,
         ...state.boxes->Belt.List.keep(box => box.id !== id),
       ],
     };
     */
  };
};
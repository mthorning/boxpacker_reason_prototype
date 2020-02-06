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
  items: list(item),
};

type action =
  | AddBox(string);
/*
 | AddItem(string, uuid)
 | EditBoxName(uuid, string);
 */

let reducer = (state, action) => {
  switch (action) {
  | AddBox(name) => {
      ...state,
      boxes: state.boxes @ [{id: uuid(name), name}],
    }
  /*
      | AddItem(name, box) =>
        let newItem = {id: uuid(), name, box};
        {...state, items: [newItem, ...state.items]};
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
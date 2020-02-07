open AppState;
open Utils;

let initialState: state = {
  boxes: [
    {id: uuid("one"), name: "one"},
    {id: uuid("two"), name: "two"},
    {id: uuid("three"), name: "three"},
  ],
  items: [],
  selectedBox: None,
};

module App = {
  [@react.component]
  let make = _ => {
    let (state, dispatch) = React.useReducer(reducer, initialState);
    <Boxes state dispatch />;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");
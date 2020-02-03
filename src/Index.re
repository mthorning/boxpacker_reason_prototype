open AppState;
open Utils;

let initialState: state = {boxes: [{id: nanoid(), name: "one"}], items: []};

module App = {
  [@react.component]
  let make = _ => {
    let (state, dispatch) = React.useReducer(reducer, initialState);
    <Boxes state dispatch />;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");
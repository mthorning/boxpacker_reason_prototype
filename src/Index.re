open AppState;
open Utils;

let boxOne = {id: uuid("boxOne"), name: "one", eType: Box};
let itemOne = {id: uuid("itemOne"), name: "one", eType: Item(boxOne.id)};
let initialState: state = {
  entities: [
    boxOne,
    {id: uuid("boxTwo"), name: "two", eType: Box},
    {id: uuid("boxThree"), name: "three", eType: Box},
    itemOne,
  ],
  selectedBox: Selected(boxOne.id),
  selectedItem: Selected(itemOne.id),
};

module Styles = {
  open Css;

  let container =
    style([
      10->px->padding,
      900->px->maxWidth,
      margin(auto),
      display(`flex),
      alignItems(stretch),
      justifyContent(spaceEvenly),
    ]);
};

module App = {
  [@react.component]
  let make = _ => {
    let (state, dispatch) = React.useReducer(reducer, initialState);
    <div className=Styles.container>
      <Boxes state dispatch />
      <Items state dispatch />
    </div>;
  };
};

ReactDOMRe.renderToElementWithId(<App />, "root");
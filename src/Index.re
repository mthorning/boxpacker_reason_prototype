module App = {
  let entities: list(AppState.entity) = [
    {id: AppState.uuid(), name: "item one"},
    {id: AppState.uuid(), name: "item two"},
    {id: AppState.uuid(), name: "item three"},
  ];

  [@react.component]
  let addEntity = (name: string) => Js.log(name);
  let editEntity = (name: string) => Js.log(name);
  let make = _ => <Panel addEntity editEntity entities />;
};
ReactDOMRe.renderToElementWithId(<App />, "root");
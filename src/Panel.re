open Utils;

[@react.component]
let make =
    (
      ~entities: list(AppState.entity),
      ~addEntity as onSubmit,
      ~editEntity as onEdit,
    ) => {
  <>
    <InputBox onSubmit />
    <ul>
      {entities->mapElements(entity => {
         <li key={BsUuid.Uuid.V4.toString(entity.id)}>
           <Entity name={entity.name} onEdit />
         </li>
       })}
    </ul>
  </>;
};
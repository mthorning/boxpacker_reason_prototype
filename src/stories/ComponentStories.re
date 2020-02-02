open BsStorybook.Story;
open BsStorybook.Action;
open BsStorybook.Knobs;

let _module = [%bs.raw "module"];

storiesOf("Input", _module)
->addDecorator(withKnobs)
->(
    add("Input", () => {
      let placeholder =
        text(~label="Text", ~defaultValue="Add something", ());
      let onSubmit = action("Enter key pressed");
      <InputBox placeholder onSubmit />;
    })
  );

storiesOf("Entity", _module)
->addDecorator(withKnobs)
->(
    add("Entity", () => {
      let edit = boolean(~label="Edit", ());
      let name = text(~label="Name", ~defaultValue="Towels", ());
      let onEdit = (_: string) => action("Entity edited");
      <Entity edit name onEdit />;
    })
  );
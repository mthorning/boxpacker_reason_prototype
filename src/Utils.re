let s = React.string;
let mapElements = (list, callback) => {
  list->Belt.List.map(callback)->Array.of_list->React.array;
};
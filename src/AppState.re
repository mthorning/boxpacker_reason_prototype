open BsUuid;
let uuid = Uuid.V4.create;

type entity = {
  id: Uuid.V4.t,
  name: string,
};
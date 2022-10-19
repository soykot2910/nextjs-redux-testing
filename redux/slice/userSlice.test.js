import reducer, { todoAdded } from "./userSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual([
    { text: "Use Redux", completed: false, id: 0 },
  ]);
});

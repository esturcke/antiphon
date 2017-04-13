// @flow
import { valid, uri } from "./util";
["this", "this-too", "and-this-as-well"].forEach(id =>
  test(`"${id}" is a valid ID`, () => expect(valid(id)).toBe(true))
);
[
  "",
  ".",
  "..",
  "...",
  "foo.txt",
  "../foo",
  "This is (longer).docx"
].forEach(id =>
  test(`"${id}" is an invalid ID`, () => expect(valid(id)).toBe(false))
);

test("URI for song with id foo-bar is correct", () =>
  expect(uri("foo-bar")).toBe("http://localhost:3001/song/foo-bar"));
